const fs = require('fs');
const path = require('path');

// Complete state code to full name mapping
const completeStateNames = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming'
};

function extractStateCodesFromCampuses() {
  try {
    const campusesPath = path.join(__dirname, '../content/campuses/index.ts');
    const content = fs.readFileSync(campusesPath, 'utf8');
    
    // Extract state codes using regex
    const stateCodeRegex = /stateCode:\s*"([A-Z]{2})"/g;
    const matches = [...content.matchAll(stateCodeRegex)];
    const stateCodes = [...new Set(matches.map(match => match[1]))];
    
    console.log('Found state codes:', stateCodes);
    return stateCodes;
  } catch (error) {
    console.error('Error reading campuses file:', error);
    return [];
  }
}

function updateStateMapping(filePath, stateCodes) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Create the new state mapping object
    const newStateMapping = {};
    stateCodes.forEach(code => {
      if (completeStateNames[code]) {
        newStateMapping[code] = completeStateNames[code];
      } else {
        console.warn(`Warning: No full name found for state code: ${code}`);
        newStateMapping[code] = code; // Fallback to code itself
      }
    });
    
    // Convert to formatted string
    const stateMappingString = Object.entries(newStateMapping)
      .map(([code, name]) => `  '${code}': '${name}'`)
      .join(',\n');
    
    // Replace the existing state mapping
    const stateMappingRegex = /const stateNames: \{ \[key: string\]: string \} = \{[\s\S]*?\};/;
    const newStateMappingBlock = `const stateNames: { [key: string]: string } = {\n${stateMappingString}\n};`;
    
    if (stateMappingRegex.test(content)) {
      content = content.replace(stateMappingRegex, newStateMappingBlock);
    } else {
      console.error(`Could not find state mapping in ${filePath}`);
      return false;
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated state mapping in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
    return false;
  }
}

function main() {
  console.log('Starting state mapping update...');
  
  // Extract state codes from campuses data
  const stateCodes = extractStateCodesFromCampuses();
  
  if (stateCodes.length === 0) {
    console.error('No state codes found. Exiting.');
    process.exit(1);
  }
  
  // Update both files
  const admissionFormsPath = path.join(__dirname, '../app/admission-forms/page.tsx');
  const locationsPath = path.join(__dirname, '../app/locations/page.tsx');
  
  const admissionFormsUpdated = updateStateMapping(admissionFormsPath, stateCodes);
  const locationsUpdated = updateStateMapping(locationsPath, stateCodes);
  
  if (admissionFormsUpdated && locationsUpdated) {
    console.log('✅ State mapping updated successfully in both files!');
    console.log(`Updated mapping includes: ${stateCodes.join(', ')}`);
  } else {
    console.error('❌ Failed to update one or more files');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
} 