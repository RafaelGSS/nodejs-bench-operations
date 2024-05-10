## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|13,486,829|6743415|
|(short string) (true) String#slice and strict comparison|17,310,203|8655102|
|(long string) (true) String#endsWith|13,569,254|6784628|
|(long string) (true) String#slice and strict comparison|15,993,587|7996794|
|(short string) (false) String#endsWith|14,140,092|7070047|
|(short string) (false) String#slice and strict comparison|16,148,292|8074147|
|(long string) (false) String#endsWith|13,976,541|6988271|
|(long string) (false) String#slice and strict comparison|16,272,510|8136256|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:07:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":13486829.52410441,"samples":6743415},{"name":"(short string) (true) String#slice and strict comparison","opsSec":17310203.966983408,"samples":8655102},{"name":"(long string) (true) String#endsWith","opsSec":13569254.194779433,"samples":6784628},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15993587.336508704,"samples":7996794},{"name":"(short string) (false) String#endsWith","opsSec":14140092.05815386,"samples":7070047},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16148292.744882718,"samples":8074147},{"name":"(long string) (false) String#endsWith","opsSec":13976541.520153528,"samples":6988271},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16272510.060165636,"samples":8136256}]}-->
