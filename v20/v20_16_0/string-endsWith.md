## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,396,272|7698137|
|(short string) (true) String#slice and strict comparison|14,995,071|7497536|
|(long string) (true) String#endsWith|14,328,007|7164004|
|(long string) (true) String#slice and strict comparison|13,828,863|6914432|
|(short string) (false) String#endsWith|15,553,831|7776916|
|(short string) (false) String#slice and strict comparison|15,204,965|7602483|
|(long string) (false) String#endsWith|15,820,308|7910155|
|(long string) (false) String#slice and strict comparison|14,237,754|7118878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:56:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15396272.521838369,"samples":7698137},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14995071.789996589,"samples":7497536},{"name":"(long string) (true) String#endsWith","opsSec":14328007.627588227,"samples":7164004},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13828863.585144818,"samples":6914432},{"name":"(short string) (false) String#endsWith","opsSec":15553831.999970576,"samples":7776916},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15204965.452516401,"samples":7602483},{"name":"(long string) (false) String#endsWith","opsSec":15820308.956179023,"samples":7910155},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14237754.149443965,"samples":7118878}]}-->
