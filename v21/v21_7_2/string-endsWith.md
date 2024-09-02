## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,952,272|5976137|
|(short string) (true) String#slice and strict comparison|10,367,051|5183625|
|(long string) (true) String#endsWith|11,337,469|5668735|
|(long string) (true) String#slice and strict comparison|10,248,267|5124134|
|(short string) (false) String#endsWith|12,305,529|6152765|
|(short string) (false) String#slice and strict comparison|10,460,917|5230459|
|(long string) (false) String#endsWith|12,057,705|6028853|
|(long string) (false) String#slice and strict comparison|10,163,975|5081988|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:01:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11952272.517878834,"samples":5976137},{"name":"(short string) (true) String#slice and strict comparison","opsSec":10367051.927094795,"samples":5183625},{"name":"(long string) (true) String#endsWith","opsSec":11337469.455802519,"samples":5668735},{"name":"(long string) (true) String#slice and strict comparison","opsSec":10248267.385224247,"samples":5124134},{"name":"(short string) (false) String#endsWith","opsSec":12305529.04047641,"samples":6152765},{"name":"(short string) (false) String#slice and strict comparison","opsSec":10460917.309586683,"samples":5230459},{"name":"(long string) (false) String#endsWith","opsSec":12057705.059478858,"samples":6028853},{"name":"(long string) (false) String#slice and strict comparison","opsSec":10163975.206986329,"samples":5081988}]}-->
