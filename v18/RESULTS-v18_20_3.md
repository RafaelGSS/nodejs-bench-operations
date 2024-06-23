## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,543,791|8271896|
|Using dot notation|16,692,177|8346089|
|Using define property (writable)|3,218,839|1609420|
|Using define property initialized (writable)|3,963,717|1981859|
|Using define property (getter)|1,988,190|994096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16543791.768994715,"samples":8271896},{"name":"Using dot notation","opsSec":16692177.198183998,"samples":8346089},{"name":"Using define property (writable)","opsSec":3218839.8390401076,"samples":1609420},{"name":"Using define property initialized (writable)","opsSec":3963717.6195752667,"samples":1981859},{"name":"Using define property (getter)","opsSec":1988190.4174227482,"samples":994096}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.029ms
new Array(length)|100|0.012ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.401ms
new Array(length)|10,000|0.161ms
array.push|1,000,000|31.453ms
new Array(length)|1,000,000|9.162ms
array.push|100,000,000|2,274.403ms
new Array(length)|100,000,000|4,541.177ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.015ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.448ms
new Array(length)|10,000|3.139ms
array.push|1,000,000|280.344ms
new Array(length)|1,000,000|4.661ms
array.push|100,000,000|2,663.582ms
new Array(length)|100,000,000|4,959.206ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|219|111|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:49:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":219.79583418432912,"samples":111},{"name":"Array.from","opsSec":22.26214641354449,"samples":12}]}-->
