## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,204,937|7602469|
|Using dot notation|15,320,771|7660386|
|Using define property (writable)|3,448,002|1724002|
|Using define property initialized (writable)|4,379,398|2189700|
|Using define property (getter)|2,235,069|1117535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:26:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15204937.908768682,"samples":7602469},{"name":"Using dot notation","opsSec":15320771.846775925,"samples":7660386},{"name":"Using define property (writable)","opsSec":3448002.296686339,"samples":1724002},{"name":"Using define property initialized (writable)","opsSec":4379398.624866502,"samples":2189700},{"name":"Using define property (getter)","opsSec":2235069.0299810297,"samples":1117535}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.012ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.012ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.281ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|30.619ms
new Array(length)|1,000,000|8.475ms
array.push|100,000,000|1,966.701ms
new Array(length)|100,000,000|4,215.846ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.315ms
new Array(length)|10,000|0.198ms
array.push|1,000,000|19.726ms
new Array(length)|1,000,000|7.307ms
array.push|100,000,000|2,150.726ms
new Array(length)|100,000,000|4,814.395ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|234|118|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":234.8105343647007,"samples":118},{"name":"Array.from","opsSec":22.21075394620827,"samples":12}]}-->
