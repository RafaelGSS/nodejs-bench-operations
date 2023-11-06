## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|846,637,246|98|
|Using dot notation|845,459,598|98|
|Using define property (writable)|4,459,836|99|
|Using define property initialized (writable)|5,626,914|95|
|Using define property (getter)|2,193,984|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:48:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":846637246.0334784,"samples":9},{"name":"Using dot notation","opsSec":845459598.1746011,"samples":5},{"name":"Using define property (writable)","opsSec":4459835.9063445525,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5626913.739952738,"samples":4},{"name":"Using define property (getter)","opsSec":2193984.125529026,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.068ms
new Array(length)|100|0.007ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.152ms
array.push|1,000,000|32.281ms
new Array(length)|1,000,000|6.217ms
array.push|100,000,000|1,847.85ms
new Array(length)|100,000,000|4,113.021ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.048ms
new Array(length)|100|0.009ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.423ms
new Array(length)|10,000|3.263ms
array.push|1,000,000|263.149ms
new Array(length)|1,000,000|4.863ms
array.push|100,000,000|2,236.126ms
new Array(length)|100,000,000|4,569.798ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|273|84|
|Array.from|21|39|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:05:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":273.41576596039783,"samples":3},{"name":"Array.from","opsSec":20.657706040963795,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|706,945,250|85|
|[async] async function|9,358,804|82|
|[async] function|223,281|29|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Fri Oct 27 2023 00:23:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"function","opsSec":706945249.9845141,"samples":6},{"name":"[async] async function","opsSec":9358803.89447388,"samples":7},{"name":"[async] function","opsSec":223281.21344401114,"samples":3}]}-->
