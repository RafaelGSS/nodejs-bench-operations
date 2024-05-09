## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|17,326,853|8663427|
|Using Object.getOwnPropertyNames()|16,546,556|8273279|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:47:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":17326853.80997198,"samples":8663427},{"name":"Using Object.getOwnPropertyNames()","opsSec":16546556.090616906,"samples":8273279}]}-->
