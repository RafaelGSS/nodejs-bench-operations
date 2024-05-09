## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,075,220|8037611|
|Using dot notation|16,112,841|8056421|
|Using define property (writable)|3,390,546|1695274|
|Using define property initialized (writable)|3,947,937|1973969|
|Using define property (getter)|2,011,045|1005523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:23:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16075220.076019175,"samples":8037611},{"name":"Using dot notation","opsSec":16112841.669622328,"samples":8056421},{"name":"Using define property (writable)","opsSec":3390546.1132663186,"samples":1695274},{"name":"Using define property initialized (writable)","opsSec":3947937.098271432,"samples":1973969},{"name":"Using define property (getter)","opsSec":2011045.5588870256,"samples":1005523}]}-->
