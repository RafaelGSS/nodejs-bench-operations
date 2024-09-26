## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,100,701|6550351|
|(short string) (true) String#slice and strict comparison|12,143,875|6071938|
|(long string) (true) String#startsWith|12,549,261|6274631|
|(long string) (true) String#slice and strict comparison|11,246,120|5623061|
|(short string) (false) String#startsWith|13,918,737|6959369|
|(short string) (false) String#slice and strict comparison|11,915,181|5957591|
|(long string) (false) String#startsWith|13,881,808|6940905|
|(long string) (false) String#slice and strict comparison|11,645,075|5822538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:01:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13100701.85895668,"samples":6550351},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12143875.286211787,"samples":6071938},{"name":"(long string) (true) String#startsWith","opsSec":12549261.314743755,"samples":6274631},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11246120.866235752,"samples":5623061},{"name":"(short string) (false) String#startsWith","opsSec":13918737.410346592,"samples":6959369},{"name":"(short string) (false) String#slice and strict comparison","opsSec":11915181.43796535,"samples":5957591},{"name":"(long string) (false) String#startsWith","opsSec":13881808.814720444,"samples":6940905},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11645075.962431803,"samples":5822538}]}-->
