## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,868,200|9934101|
|Using dot notation|20,043,440|10021721|
|Using define property (writable)|3,652,530|1826266|
|Using define property initialized (writable)|4,238,452|2119227|
|Using define property (getter)|2,222,195|1112090|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:25:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19868200.609221067,"samples":9934101},{"name":"Using dot notation","opsSec":20043440.035736486,"samples":10021721},{"name":"Using define property (writable)","opsSec":3652530.969982901,"samples":1826266},{"name":"Using define property initialized (writable)","opsSec":4238452.999742501,"samples":2119227},{"name":"Using define property (getter)","opsSec":2222195.126427302,"samples":1112090}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.077ms
new Array(length)|100|0.006ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.321ms
array.push|1,000,000|33.801ms
new Array(length)|1,000,000|8.206ms
array.push|100,000,000|2,048.877ms
new Array(length)|100,000,000|4,689.738ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.01ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.216ms
new Array(length)|10,000|0.276ms
array.push|1,000,000|23.837ms
new Array(length)|1,000,000|4.612ms
array.push|100,000,000|2,815.316ms
new Array(length)|100,000,000|4,207.319ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|239|121|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:38:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":239.78817469357276,"samples":121},{"name":"Array.from","opsSec":23.609751954529393,"samples":12}]}-->
