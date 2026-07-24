/**
 * Vendor bundle - Common external dependencies loaded once for all Node.js bundles
 * 
 * Módulos compartilhados que são externalizados dos bundles individuais
 * para reduzir tamanho, acelerar builds e permitir correções sem rebuild.
 * 
 * Bundles que usam estes módulos devem importá-los diretamente (ex: 'jexidb').
 * O rollup converterá para require() em runtime, resolvendo de node_modules.
 */

// Database engine - usado por main.js, updater-worker.js, EPGManager.js
export { Database } from 'jexidb'
