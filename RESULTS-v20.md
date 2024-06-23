## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,986,676|9993339|
|Using dot notation|20,109,250|10054626|
|Using define property (writable)|3,493,664|1746833|
|Using define property initialized (writable)|4,317,805|2158903|
|Using define property (getter)|2,254,137|1127069|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:39:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19986676.88068154,"samples":9993339},{"name":"Using dot notation","opsSec":20109250.6324695,"samples":10054626},{"name":"Using define property (writable)","opsSec":3493664.9309353987,"samples":1746833},{"name":"Using define property initialized (writable)","opsSec":4317805.0414478835,"samples":2158903},{"name":"Using define property (getter)","opsSec":2254137.053265971,"samples":1127069}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.088ms
new Array(length)|100|0.008ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.341ms
array.push|1,000,000|28.416ms
new Array(length)|1,000,000|12.99ms
array.push|100,000,000|2,082.54ms
new Array(length)|100,000,000|4,838.899ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.01ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.22ms
new Array(length)|10,000|0.264ms
array.push|1,000,000|23.892ms
new Array(length)|1,000,000|4.945ms
array.push|100,000,000|2,262.333ms
new Array(length)|100,000,000|5,407.469ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|226|114|
|Array.from|19|10|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:50:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":226.1940311169064,"samples":114},{"name":"Array.from","opsSec":19.843636667409957,"samples":10}]}-->
