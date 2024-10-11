## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|107,211,881|53614078|
|Using dot notation|71,891,852|35947831|
|Using define property (writable)|4,261,840|2131061|
|Using define property initialized (writable)|5,577,955|2789241|
|Using define property (getter)|2,084,680|1050459|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:59:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":107211881.66521075,"samples":53614078},{"name":"Using dot notation","opsSec":71891852.16318646,"samples":35947831},{"name":"Using define property (writable)","opsSec":4261840.471342144,"samples":2131061},{"name":"Using define property initialized (writable)","opsSec":5577955.797961843,"samples":2789241},{"name":"Using define property (getter)","opsSec":2084680.6434443602,"samples":1050459}]}-->
