## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,517,399|6758700|
|(short string) (true) String#slice and strict comparison|12,148,508|6074255|
|(long string) (true) String#startsWith|12,809,064|6404533|
|(long string) (true) String#slice and strict comparison|11,483,718|5741860|
|(short string) (false) String#startsWith|14,540,954|7270478|
|(short string) (false) String#slice and strict comparison|12,588,872|6294437|
|(long string) (false) String#startsWith|14,081,865|7040933|
|(long string) (false) String#slice and strict comparison|11,859,161|5929582|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:20:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13517399.345872488,"samples":6758700},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12148508.558573434,"samples":6074255},{"name":"(long string) (true) String#startsWith","opsSec":12809064.763735406,"samples":6404533},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11483718.849811908,"samples":5741860},{"name":"(short string) (false) String#startsWith","opsSec":14540954.500269404,"samples":7270478},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12588872.432976814,"samples":6294437},{"name":"(long string) (false) String#startsWith","opsSec":14081865.535108013,"samples":7040933},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11859161.422872772,"samples":5929582}]}-->
