## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|66,839,065|33419610|
|Using dot notation|66,203,488|33103648|
|Using define property (writable)|3,897,551|1948777|
|Using define property initialized (writable)|5,502,239|2756164|
|Using define property (getter)|2,049,858|1038834|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:59:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":33419610,"opsSec":66839065.200725},{"name":"Using dot notation","samples":33103648,"opsSec":66203488.504969105},{"name":"Using define property (writable)","samples":1948777,"opsSec":3897551.0222710194},{"name":"Using define property initialized (writable)","samples":2756164,"opsSec":5502239.193255552},{"name":"Using define property (getter)","samples":1038834,"opsSec":2049858.3304779876}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.012ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.402ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|29.293ms
new Array(length)|1,000,000|8.904ms
array.push|100,000,000|2,085.466ms
new Array(length)|100,000,000|4,447.154ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.489ms
new Array(length)|10,000|3.379ms
array.push|1,000,000|273.756ms
new Array(length)|1,000,000|5.074ms
array.push|100,000,000|2,420.587ms
new Array(length)|100,000,000|4,726.945ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|230|116|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:11:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":116,"opsSec":230.5825174931278},{"name":"Array.from","samples":11,"opsSec":20.76092947383351}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,929|1965|
|new Blob (1024)|559|282|
|text (128)|45,917|22959|
|text (1024)|30,015|15021|
|arrayBuffer (128)|48,398|24200|
|arrayBuffer (1024)|29,094|14549|
|slice (0, 64)|76,741|38371|
|slice (0, 512)|39,400|19702|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:12:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":1965,"opsSec":3929.319174725234},{"name":"new Blob (1024)","samples":282,"opsSec":559.0874561851635},{"name":"text (128)","samples":22959,"opsSec":45917.604373920716},{"name":"text (1024)","samples":15021,"opsSec":30015.436398817918},{"name":"arrayBuffer (128)","samples":24200,"opsSec":48398.954388989376},{"name":"arrayBuffer (1024)","samples":14549,"opsSec":29094.78008068847},{"name":"slice (0, 64)","samples":38371,"opsSec":76741.80599671444},{"name":"slice (0, 512)","samples":19702,"opsSec":39400.779380293454}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.45 ms|1|
|Gzip|133.76 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:21:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.13344731},{"name":"Gzip","samples":1,"totalTime":0.133758347}]}-->
