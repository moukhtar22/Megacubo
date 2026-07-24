import { EventEmitter } from 'node:events'
import { ErrorHandler } from './ErrorHandler.mjs'
import { EnhancedRecommendations } from './EnhancedRecommendations.mjs'
import { SmartCache } from './SmartCache.mjs'
import { AIRecommendationEngine } from './AIRecommendationEngine.mjs'

/**
 * Smart Recommendations Module
 * Main entry point for intelligent recommendations using Trias
 */
class SmartRecommendationsModule extends EventEmitter {
    constructor() {
        super()
        this.readyState = 0
        this.aiClient = null
        this.enhancedRecommendations = null
        this.cache = null
        this.config = {
            enabled: true,
            semanticWeight: 0.6,
            traditionalWeight: 0.4,
            maxRecommendations: 50,
            cacheSize: 2000
        }
    }

    /**
     * Initialize the smart recommendations system
     * @param {Object} aiClient - AI Client instance
     * @param {Object} options - Configuration options
     */
    async initialize(aiClient, options = {}) {
        try {
            ErrorHandler.info('🚀 Initializing Smart Recommendations System...')
            
            this.aiClient = aiClient
            this.config = { ...this.config, ...options }
            
            if (!this.aiClient) {
                throw new Error('AI Client instance is required for smart recommendations')
            }

            // Initialize components with AI Client (importing inline to avoid circular deps)
            const { EnhancedRecommendations } = await import('./EnhancedRecommendations.mjs')
            
            this.enhancedRecommendations = new EnhancedRecommendations(this.aiClient)
            // AITagExpansion disabled - server no longer provides valid expansions
            // Learning removed - AI is already trained
            this.cache = new SmartCache({
                maxSize: this.config.cacheSize,
                defaultTTL: 300000,
                cleanupInterval: 60000
            })

            // Set up event listeners
            this.setupEventListeners()

            this.readyState = 1
            this.emit('initialized')
            
            ErrorHandler.info('✅ Smart Recommendations System initialized successfully')
            
        } catch (error) {
            ErrorHandler.error('❌ Failed to initialize Smart Recommendations System:', error)
            this.readyState = -1
            throw error
        }
    }

    /**
     * Set up event listeners for the system
     */
    setupEventListeners() {
        // Enhanced recommendations events
        this.enhancedRecommendations.on('feedbackRecorded', (data) => {
            this.emit('feedbackRecorded', data)
        })

        // Cache events
        this.cache.on('cacheSet', (data) => {
            this.emit('cacheUpdated', data)
        })

        this.cache.on('cacheInvalidated', (data) => {
            this.emit('cacheInvalidated', data)
        })
    }

    /**
     * Get intelligent recommendations for a user
     * @param {Object} userContext - User context and preferences
     * @param {Object} options - Recommendation options
     * @returns {Promise<Array>} Enhanced recommendations
     */
    async getRecommendations(userContext, options = {}) {
        if (!this.isReady()) {
            throw new Error('Smart Recommendations System not ready')
        }

        try {
            const recommendations = await this.enhancedRecommendations.getRecommendations(
                userContext, 
                options
            )
            
            this.emit('recommendationsGenerated', { 
                userId: userContext.userId, 
                count: recommendations.length 
            })
            
            return recommendations
            
        } catch (error) {
            ErrorHandler.error('Failed to get recommendations:', error)
            throw error
        }
    }

    // recordUserFeedback() removed - learning not needed with AI

    /**
     * Expand tags (disabled - server no longer provides valid expansions)
     * @param {Object} tags - Tags to expand
     * @param {Object} options - Options {as: 'objects'|'default', amount: number}
     * @returns {Promise<Array|Object>} Related tags
     */
    async expandTags(tags, options = {}) {
        // AITagExpansion permanently disabled - return empty
        return options.as === 'objects' ? [] : {}
    }

    // discoverSimilarContent() removed - SemanticContentDiscovery not used

    /**
     * Get system performance metrics
     * @returns {Object} Performance metrics
     */
    getPerformanceMetrics() {
        if (!this.isReady()) {
            return { error: 'System not ready' }
        }

        return {
            enhancedRecommendations: this.enhancedRecommendations.getPerformanceMetrics(),
            cache: this.cache.getStats()
        }
    }

    /**
     * Get system health status
     * @returns {Object} Health status
     */
    getHealthStatus() {
        return {
            readyState: this.readyState,
            enabled: this.config.enabled,
            aiClientAvailable: !!this.aiClient,
            components: {
                enhancedRecommendations: !!this.enhancedRecommendations,
                cache: !!this.cache
            },
            aiClientStats: this.aiClient?.getStats() || {},
            health: this.enhancedRecommendations?.getHealthStatus() || {}
        }
    }

    /**
     * Check if the system is ready
     * @returns {boolean} System ready
     */
    isReady() {
        return this.readyState === 1 && 
               this.enhancedRecommendations && 
               this.aiClient
    }

    /**
     * Update system configuration
     * @param {Object} newConfig - New configuration
     */
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig }
        this.emit('configUpdated', this.config)
    }

    /**
     * Get current configuration
     * @returns {Object} Current configuration
     */
    getConfig() {
        return { ...this.config }
    }

    /**
     * Reset the system (clear cache, reset learning)
     */
    async reset() {
        try {
            ErrorHandler.info('🔄 Resetting Smart Recommendations System...')
            
            if (this.cache) {
                this.cache.clear()
            }
            
            // Learning removed - AI is already trained
            
            this.readyState = 0
            this.emit('reset')
            
            ErrorHandler.info('✅ Smart Recommendations System reset completed')
            
        } catch (error) {
            ErrorHandler.error('❌ Failed to reset Smart Recommendations System:', error)
            throw error
        }
    }

    /**
     * Destroy the system and cleanup
     */
    async destroy() {
        try {
            ErrorHandler.info('🗑️ Destroying Smart Recommendations System...')
            
            if (this.cache) {
                this.cache.destroy()
            }
            
            this.enhancedRecommendations = null
            this.cache = null
            this.aiClient = null
            
            this.readyState = -1
            this.removeAllListeners()
            
            ErrorHandler.info('✅ Smart Recommendations System destroyed')
            
        } catch (error) {
            ErrorHandler.error('❌ Failed to destroy Smart Recommendations System:', error)
        }
    }
}

// Create and export singleton instance
const smartRecommendations = new SmartRecommendationsModule()

export default smartRecommendations

// Export individual components for advanced usage
export {
    EnhancedRecommendations,
    AIRecommendationEngine,
    SmartCache
}
