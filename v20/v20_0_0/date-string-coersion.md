## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|714,398|94|
|Using brackets {}|720,143|98|
|Using '' + |725,573|92|
|Using date.toString()|794,636|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":714398.0069168536,"samples":4},{"name":"Using brackets {}","opsSec":720142.8843629536,"samples":6},{"name":"Using '' + ","opsSec":725572.6844236251,"samples":5},{"name":"Using date.toString()","opsSec":794636.2560163364,"samples":6}]}-->
