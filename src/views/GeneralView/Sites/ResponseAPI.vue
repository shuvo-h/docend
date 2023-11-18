<template>
  <section class="row">
    <div>
      <details style="position: relative;">
        <summary style="color: #00FFFF; background-color: rgb(17, 23, 26); padding: 0.8rem;">
          <button style="background-color: rgb(24, 111, 175);">POST</button>
          <span>/platform/api/v1/accounts</span>
        </summary>
        <div style="position:absolute; background-color: #fff; color: blue; padding: 0.5rem; width:100%;">
          <p>https://app.chatwoot.com/platform/api/v1/accounts</p>
        </div>
      </details>
    </div>

    <div>
      <div>
        <h4>Request Sample</h4>
        <button style="padding: 0.4rem 1rem;">Payload</button>
        <div class="codeSnipet">
          <div style="position: relative; background-color: rgb(17, 23, 26); padding: 0.4rem;">
            <p style="position:absolute; top:-15px;color: lightgray;">content type</p>
            <code style="color: lightgray;">application/json; charset=utf-8</code>
          </div>
          <div class="json-viewer">
            <div class="json-header">
              <button @click="copyToClipboard">Copy</button>
              <button @click="toggleExpand">{{ isExpanded ? 'Collapse' : 'Expand' }}</button>
            </div>
            <pre>{{ formattedApiJeson }}</pre>
          </div>
        </div>
      </div>
      <div>
        <h4>Response Sample</h4>
        <button style="padding: 0.4rem 1rem;">200</button>
        <div class="codeSnipet">
          <div style="position: relative; background-color: rgb(17, 23, 26); padding: 0.4rem;">
            <p style="position:absolute; top:-15px;color: lightgray;">content type</p>
            <code style="color: lightgray;">application/json; charset=utf-8</code>
          </div>
          <div>
            <pre>
              {{
                `{
                  "id": "string",
                  "name": "string"
                }`
              }}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    formattedApiJeson() {
      return this.isExpanded ? this.formatJson(this.responseAPI, 0) : this.formatJson(this.addEllipsisToObj(this.formatShortJson(this.responseAPI,50)),0);
    },
  },
  data() {
    return {
      isExpanded: false,
      responseAPI: {
        id: 'string',
        name: {
          fName: 'string',
          mName: 'string',
          lName: 'string',
        },
        role: ['string', 'number', '....'],
        guardians: [
          { name: 'string', occupation: 'string', relation: 'mother' | 'father', earning: [50, 41, 200], address: [] },
          {
            name: 'string',
            occupation: 'string',
            relation: 'mother' | 'father',
            earning: [50, 41, 200],
            address: [{ road: 'abc', city: 'def' }],
          },
        ],
        isMarried: 'false',
      },
    };
  },
  methods: {
    formatJson(data, depth, isLast = true) {
      const spaces = '  '.repeat(depth);
      if (Array.isArray(data)) {
        if (data.length === 0) {
          return '[]';
        }
        return `[\n${data.map((item, index, array) => spaces + '  ' + this.formatJson(item, depth + 1, index === array.length - 1)).join(',\n')}\n${spaces}]`;
      } else if (typeof data === 'object' && data !== null) {
        const entries = Object.entries(data)
          .map(([key, value], index, array) => {
            const formattedValue = this.formatJson(value, depth + 1, index === array.length - 1);
            return `${spaces}  "${key}": ${formattedValue}`;
          });
        return `{\n${entries.join(',\n')}\n${spaces}}`;
      } else {
        return JSON.stringify(data);
      }
    },






        
        formatShortJson(data, limit = 45) {
        let totalCount = 0;

        const deepCopy = (obj) => {
            if (Array.isArray(obj)) {
            const result = obj.map(el => deepCopy(el)).filter(el => el !== null); // Filter out null values
            return result.length > 0 ? result : null; // Return null if all elements were filtered
            } else if (typeof obj === 'object' && obj !== null) {
            const result = {};
            Object.entries(obj).forEach(([key, value]) => {
                const keyCount = key.length;

                if (totalCount + keyCount <= limit) {
                totalCount += keyCount;
                const nestedCopy = deepCopy(value);
                if (nestedCopy !== null) {
                    result[key] = nestedCopy;
                }
                }
                // If adding this property would exceed the limit, skip it
            });
            return Object.keys(result).length > 0 ? result : null; // Return null if the result is an empty object
            } else if (typeof obj === 'number' || typeof obj === 'string' || typeof obj === 'boolean') {
            const valueCount = obj.toString().length;

            if (totalCount + valueCount <= limit) {
                totalCount += valueCount;
                return obj;
            } else {
                return null; // Skip adding this property if the limit would be exceeded
            }
            } else {
            return obj;
            }
        };

        const result = deepCopy(data);
        console.log({ count: totalCount });

        return result;
        },

        addEllipsisToObj(obj){
            if (typeof obj === 'object' && !Array.isArray(obj)) {
                obj['---']= "---";
            }
            return obj;
        },



    async copyToClipboard() {
      await navigator.clipboard.writeText(this.formattedApiJeson);
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
  .codeSnipet {
    color: #00FFFF;
    background-color: #000;
    padding: 20px 10px;
  }
  .json-viewer {
    font-family: 'Courier New', Courier, monospace;
    white-space: pre-wrap;
  }

  .json-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .json-header button {
    padding: 5px;
    cursor: pointer;
  }
</style>


