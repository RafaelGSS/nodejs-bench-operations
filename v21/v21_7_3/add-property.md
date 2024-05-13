## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,322,310|7661156|
|Using dot notation|15,349,400|7674701|
|Using define property (writable)|3,487,372|1743687|
|Using define property initialized (writable)|4,224,595|2112298|
|Using define property (getter)|2,204,322|1102162|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15322310.191979265,"samples":7661156},{"name":"Using dot notation","opsSec":15349400.772048611,"samples":7674701},{"name":"Using define property (writable)","opsSec":3487372.9537892314,"samples":1743687},{"name":"Using define property initialized (writable)","opsSec":4224595.543752057,"samples":2112298},{"name":"Using define property (getter)","opsSec":2204322.4569770377,"samples":1102162}]}-->
