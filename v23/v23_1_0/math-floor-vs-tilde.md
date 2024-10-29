## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|126,370,022|63547482|
|~ (small)|98,820,499|49422197|
|Math.floor (long)|94,821,648|47410840|
|~ (long)|95,601,739|47802739|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:15:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":126370022.40003864,"samples":63547482},{"name":"~ (small)","opsSec":98820499.40088587,"samples":49422197},{"name":"Math.floor (long)","opsSec":94821648.13992622,"samples":47410840},{"name":"~ (long)","opsSec":95601739.58957508,"samples":47802739}]}-->
