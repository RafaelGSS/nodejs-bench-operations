## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|86,779,461|43390210|
|Using dot notation|60,144,754|30094621|
|Using define property (writable)|4,905,832|2454343|
|Using define property initialized (writable)|7,214,201|3607161|
|Using define property (getter)|2,461,480|1230789|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:00:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":43390210,"opsSec":86779461.086955},{"name":"Using dot notation","samples":30094621,"opsSec":60144754.4888682},{"name":"Using define property (writable)","samples":2454343,"opsSec":4905832.728438478},{"name":"Using define property initialized (writable)","samples":3607161,"opsSec":7214201.609403541},{"name":"Using define property (getter)","samples":1230789,"opsSec":2461480.569676091}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.44ms
new Array(length)|10,000|0.241ms
array.push|1,000,000|32.774ms
new Array(length)|1,000,000|7.515ms
array.push|100,000,000|1,974.279ms
new Array(length)|100,000,000|4,290.393ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.013ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.021ms
array.push|10,000|183.626ms
new Array(length)|10,000|0.034ms
array.push|1,000,000|18.246ms
new Array(length)|1,000,000|7.855ms
array.push|100,000,000|2,083.307ms
new Array(length)|100,000,000|5,011.245ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|268|135|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:10:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":135,"opsSec":268.3789226024769},{"name":"Array.from","samples":12,"opsSec":22.805142744410524}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,633|2317|
|new Blob (1024)|573|290|
|text (128)|4,091|2054|
|text (1024)|518|260|
|arrayBuffer (128)|4,119|2060|
|arrayBuffer (1024)|507|255|
|slice (0, 64)|155,101|81268|
|slice (0, 512)|31,564|15784|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:14:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2317,"opsSec":4633.6519756674115},{"name":"new Blob (1024)","samples":290,"opsSec":573.0440701715781},{"name":"text (128)","samples":2054,"opsSec":4091.1134383495996},{"name":"text (1024)","samples":260,"opsSec":518.0610828328245},{"name":"arrayBuffer (128)","samples":2060,"opsSec":4119.86963908488},{"name":"arrayBuffer (1024)","samples":255,"opsSec":507.7632611978362},{"name":"slice (0, 64)","samples":81268,"opsSec":155101.18706361818},{"name":"slice (0, 512)","samples":15784,"opsSec":31564.41687052569}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.05 ms|1|
|Gzip|134.66 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:22:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134051937},{"name":"Gzip","samples":1,"totalTime":0.134660821}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,656|3329|
|crypto.verify('RSA-SHA256')|6,815|3408|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:26:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3329,"opsSec":6656.919741691998},{"name":"crypto.verify('RSA-SHA256')","samples":3408,"opsSec":6815.291795768334}]}-->
