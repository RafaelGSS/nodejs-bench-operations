## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,162,201|7081101|
|(short string) (true) String#slice and strict comparison|12,904,780|6452391|
|(long string) (true) String#startsWith|13,664,667|6832334|
|(long string) (true) String#slice and strict comparison|12,372,579|6186290|
|(short string) (false) String#startsWith|14,747,169|7373585|
|(short string) (false) String#slice and strict comparison|12,736,573|6368287|
|(long string) (false) String#startsWith|12,845,476|6422739|
|(long string) (false) String#slice and strict comparison|12,207,917|6103959|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:12:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14162201.716588836,"samples":7081101},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12904780.373998063,"samples":6452391},{"name":"(long string) (true) String#startsWith","opsSec":13664667.562487697,"samples":6832334},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12372579.307927342,"samples":6186290},{"name":"(short string) (false) String#startsWith","opsSec":14747169.056106608,"samples":7373585},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12736573.21013258,"samples":6368287},{"name":"(long string) (false) String#startsWith","opsSec":12845476.612675158,"samples":6422739},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12207917.487547088,"samples":6103959}]}-->
