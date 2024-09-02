## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|17,293,776|8646889|
|(short string) (true) String#slice and strict comparison|15,161,007|7580504|
|(long string) (true) String#startsWith|16,711,279|8355640|
|(long string) (true) String#slice and strict comparison|14,038,766|7019384|
|(short string) (false) String#startsWith|18,418,756|9209379|
|(short string) (false) String#slice and strict comparison|15,349,438|7674720|
|(long string) (false) String#startsWith|18,319,288|9159645|
|(long string) (false) String#slice and strict comparison|14,476,633|7238317|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:24:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":17293776.339597218,"samples":8646889},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15161007.424045445,"samples":7580504},{"name":"(long string) (true) String#startsWith","opsSec":16711279.632666886,"samples":8355640},{"name":"(long string) (true) String#slice and strict comparison","opsSec":14038766.146573149,"samples":7019384},{"name":"(short string) (false) String#startsWith","opsSec":18418756.71119022,"samples":9209379},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15349438.311351253,"samples":7674720},{"name":"(long string) (false) String#startsWith","opsSec":18319288.424328998,"samples":9159645},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14476633.971138151,"samples":7238317}]}-->
