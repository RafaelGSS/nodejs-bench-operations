## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|937,623,727|92|
|Using dot notation|940,148,087|96|
|Using define property (writable)|5,059,684|96|
|Using define property initialized (writable)|6,527,034|92|
|Using define property (getter)|2,764,906|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:18:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":937623727.4196515,"samples":5},{"name":"Using dot notation","opsSec":940148086.5817163,"samples":7},{"name":"Using define property (writable)","opsSec":5059684.452005652,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6527033.634867635,"samples":4},{"name":"Using define property (getter)","opsSec":2764905.7063849717,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.007ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.325ms
new Array(length)|10,000|0.335ms
array.push|1,000,000|30.716ms
new Array(length)|1,000,000|7.903ms
array.push|100,000,000|1,997.478ms
new Array(length)|100,000,000|4,692.85ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.031ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.221ms
new Array(length)|10,000|0.169ms
array.push|1,000,000|23.113ms
new Array(length)|1,000,000|4.732ms
array.push|100,000,000|2,766.295ms
new Array(length)|100,000,000|4,209.487ms
