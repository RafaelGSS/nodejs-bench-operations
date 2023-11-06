## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|846,637,246|98|
|Using dot notation|845,459,598|98|
|Using define property (writable)|4,459,836|99|
|Using define property initialized (writable)|5,626,914|95|
|Using define property (getter)|2,193,984|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 14:48:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":846637246.0334784,"samples":9},{"name":"Using dot notation","opsSec":845459598.1746011,"samples":5},{"name":"Using define property (writable)","opsSec":4459835.9063445525,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5626913.739952738,"samples":4},{"name":"Using define property (getter)","opsSec":2193984.125529026,"samples":6}]}-->
