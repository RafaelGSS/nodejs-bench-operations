## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,474,928|8237465|
|Using dot notation|16,519,020|8259511|
|Using define property (writable)|3,345,397|1672699|
|Using define property initialized (writable)|4,290,219|2145110|
|Using define property (getter)|2,080,425|1040213|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 18:29:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16474928.680215826,"samples":8237465},{"name":"Using dot notation","opsSec":16519020.448254095,"samples":8259511},{"name":"Using define property (writable)","opsSec":3345397.511865788,"samples":1672699},{"name":"Using define property initialized (writable)","opsSec":4290219.44151406,"samples":2145110},{"name":"Using define property (getter)","opsSec":2080425.2172930257,"samples":1040213}]}-->
