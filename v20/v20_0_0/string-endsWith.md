## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,734,189|6367096|
|(short string) (true) String#slice and strict comparison|16,131,637|8065819|
|(long string) (true) String#endsWith|13,475,024|6737513|
|(long string) (true) String#slice and strict comparison|16,104,811|8052406|
|(short string) (false) String#endsWith|13,972,160|6986081|
|(short string) (false) String#slice and strict comparison|16,156,004|8078003|
|(long string) (false) String#endsWith|13,771,283|6885642|
|(long string) (false) String#slice and strict comparison|16,106,330|8053166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:09:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12734189.99619546,"samples":6367096},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16131637.853848876,"samples":8065819},{"name":"(long string) (true) String#endsWith","opsSec":13475024.541435923,"samples":6737513},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16104811.408688316,"samples":8052406},{"name":"(short string) (false) String#endsWith","opsSec":13972160.640861142,"samples":6986081},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16156004.967693012,"samples":8078003},{"name":"(long string) (false) String#endsWith","opsSec":13771283.409000631,"samples":6885642},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16106330.402539862,"samples":8053166}]}-->
