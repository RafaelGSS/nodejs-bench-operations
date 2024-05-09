## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,950|521976|
|Using brackets {}|1,045,896|522949|
|Using '' + |1,029,648|514825|
|Using date.toString()|1,178,988|589495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:17:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1043950.3505581897,"samples":521976},{"name":"Using brackets {}","opsSec":1045896.2889134465,"samples":522949},{"name":"Using '' + ","opsSec":1029648.3196139256,"samples":514825},{"name":"Using date.toString()","opsSec":1178988.8823181011,"samples":589495}]}-->
