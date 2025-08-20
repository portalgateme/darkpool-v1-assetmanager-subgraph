#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};
  
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    const value = args[i + 1];
    params[key] = value;
  }
  
  return params;
}

function toPascalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1$2')
            .split(/[^a-zA-Z0-9]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
}

function updateNetworks() {
  const { startBlock, network, hardhatPath, output } = parseArgs();
  
  if (!startBlock || !network || !hardhatPath) {
    console.error('Usage: node update-networks.js --startBlock <block> --network <network> --hardhatPath <path> [--output <path>]');
    console.error('Example: node update-networks.js --startBlock 20030270 --network base --hardhatPath ./contracts/hardhatBase.json');
    process.exit(1);
  }
  
  try {
    const hardhatData = JSON.parse(fs.readFileSync(hardhatPath, 'utf8'));
    
    const networksPath = output || './networks.json';
    let networksData = {};
    
    if (fs.existsSync(networksPath)) {
      networksData = JSON.parse(fs.readFileSync(networksPath, 'utf8'));
    }
    
    if (!networksData[network]) {
      networksData[network] = {};
    }
    
    Object.entries(hardhatData).forEach(([contractKey, address]) => {
      const contractName = toPascalCase(contractKey);
      
      networksData[network][contractName] = {
        address: address
      };
      
      networksData[network][contractName].startBlock = parseInt(startBlock);
    });
    
    fs.writeFileSync(networksPath, JSON.stringify(networksData, null, 2));
    
    console.log(`✅ Successfully updated ${networksPath}`);
    console.log(`📊 Network: ${network}`);
    console.log(`🏗️  Start Block: ${startBlock}`);
    console.log(`📝 Contracts updated: ${Object.keys(hardhatData).length}`);
    
  } catch (error) {
    console.error('❌ Error updating networks:', error.message);
    process.exit(1);
  }
}

updateNetworks();