## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|591,474,013|96|
|Using dot notation|596,079,743|95|
|Using define property (writable)|2,647,598|96|
|Using define property initialized (writable)|3,462,715|95|
|Using define property (getter)|1,407,888|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:36:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":591474012.7384559,"samples":6},{"name":"Using dot notation","opsSec":596079742.7008108,"samples":6},{"name":"Using define property (writable)","opsSec":2647597.84386132,"samples":7},{"name":"Using define property initialized (writable)","opsSec":3462714.5357824177,"samples":5},{"name":"Using define property (getter)","opsSec":1407888.025319229,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.024ms
new Array(length)|10|0.003ms
array.push|100|0.036ms
new Array(length)|100|0.011ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.53ms
new Array(length)|10,000|0.568ms
array.push|1,000,000|39.531ms
new Array(length)|1,000,000|9.656ms
array.push|100,000,000|2,052.482ms
new Array(length)|100,000,000|5,831.91ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.023ms
array.push|100|0.02ms
new Array(length)|100|0.013ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.416ms
new Array(length)|10,000|0.439ms
array.push|1,000,000|30.719ms
new Array(length)|1,000,000|5.774ms
array.push|100,000,000|2,199.721ms
new Array(length)|100,000,000|5,960.651ms
