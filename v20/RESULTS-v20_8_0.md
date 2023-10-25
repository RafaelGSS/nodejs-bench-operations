## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|651,309,795|88|
|Using dot notation|640,792,002|89|
|Using define property (writable)|2,833,555|90|
|Using define property initialized (writable)|3,749,802|90|
|Using define property (getter)|1,536,244|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":651309795.3406146,"samples":9},{"name":"Using dot notation","opsSec":640792001.9753667,"samples":6},{"name":"Using define property (writable)","opsSec":2833555.2229388016,"samples":8},{"name":"Using define property initialized (writable)","opsSec":3749801.586644322,"samples":4},{"name":"Using define property (getter)","opsSec":1536243.647203398,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.006ms
array.push|100|0.051ms
new Array(length)|100|0.013ms
array.push|1,000|0.077ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.559ms
new Array(length)|10,000|0.53ms
array.push|1,000,000|41.108ms
new Array(length)|1,000,000|9.797ms
array.push|100,000,000|2,132.599ms
new Array(length)|100,000,000|4,982.726ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.022ms
array.push|100|0.065ms
new Array(length)|100|0.014ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.39ms
new Array(length)|10,000|0.265ms
array.push|1,000,000|34.32ms
new Array(length)|1,000,000|9.516ms
array.push|100,000,000|2,684.771ms
new Array(length)|100,000,000|5,732.528ms
