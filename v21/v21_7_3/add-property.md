## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,206,474|7603238|
|Using dot notation|15,112,090|7556046|
|Using define property (writable)|3,394,423|1697212|
|Using define property initialized (writable)|4,206,441|2103221|
|Using define property (getter)|2,098,849|1049425|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15206474.570586722,"samples":7603238},{"name":"Using dot notation","opsSec":15112090.186548922,"samples":7556046},{"name":"Using define property (writable)","opsSec":3394423.619818937,"samples":1697212},{"name":"Using define property initialized (writable)","opsSec":4206441.79808644,"samples":2103221},{"name":"Using define property (getter)","opsSec":2098849.7817223584,"samples":1049425}]}-->
