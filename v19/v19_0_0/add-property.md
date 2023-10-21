## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|706,291,127|97|
|Using dot notation|712,396,201|94|
|Using define property (writable)|2,974,236|99|
|Using define property initialized (writable)|3,830,403|96|
|Using define property (getter)|1,599,073|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":706291127.114454,"samples":5},{"name":"Using dot notation","opsSec":712396200.9047467,"samples":8},{"name":"Using define property (writable)","opsSec":2974235.9267255045,"samples":6},{"name":"Using define property initialized (writable)","opsSec":3830403.0560961836,"samples":5},{"name":"Using define property (getter)","opsSec":1599072.6060941573,"samples":4}]}-->
