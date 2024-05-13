## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,041,795|8020898|
|Using dot notation|16,115,290|8057646|
|Using define property (writable)|3,380,889|1690445|
|Using define property initialized (writable)|4,421,475|2210738|
|Using define property (getter)|2,208,036|1104019|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 16:34:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16041795.96791981,"samples":8020898},{"name":"Using dot notation","opsSec":16115290.517408863,"samples":8057646},{"name":"Using define property (writable)","opsSec":3380889.57400558,"samples":1690445},{"name":"Using define property initialized (writable)","opsSec":4421475.301409127,"samples":2210738},{"name":"Using define property (getter)","opsSec":2208036.5956855104,"samples":1104019}]}-->
