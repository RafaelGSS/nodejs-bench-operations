## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|116,227,602|59129730|
|~ (small)|85,835,048|42963093|
|Math.floor (long)|93,191,734|46712852|
|~ (long)|85,571,303|42989735|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:10:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":116227602.98310935,"samples":59129730},{"name":"~ (small)","opsSec":85835048.23415604,"samples":42963093},{"name":"Math.floor (long)","opsSec":93191734.96635877,"samples":46712852},{"name":"~ (long)","opsSec":85571303.78038317,"samples":42989735}]}-->
