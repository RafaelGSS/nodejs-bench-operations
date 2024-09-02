## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,060,910|7530456|
|(short string) (true) String#slice and strict comparison|13,827,159|6913581|
|(long string) (true) String#startsWith|14,348,013|7174008|
|(long string) (true) String#slice and strict comparison|12,844,228|6422115|
|(short string) (false) String#startsWith|15,010,096|7505049|
|(short string) (false) String#slice and strict comparison|12,694,088|6347045|
|(long string) (false) String#startsWith|14,866,832|7433417|
|(long string) (false) String#slice and strict comparison|13,308,835|6654418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:32:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15060910.283193173,"samples":7530456},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13827159.98118104,"samples":6913581},{"name":"(long string) (true) String#startsWith","opsSec":14348013.876514316,"samples":7174008},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12844228.587339228,"samples":6422115},{"name":"(short string) (false) String#startsWith","opsSec":15010096.439104306,"samples":7505049},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12694088.045436554,"samples":6347045},{"name":"(long string) (false) String#startsWith","opsSec":14866832.572787052,"samples":7433417},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13308835.095097486,"samples":6654418}]}-->
