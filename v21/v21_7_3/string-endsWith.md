## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,576,020|7288011|
|(short string) (true) String#slice and strict comparison|12,297,375|6148688|
|(long string) (true) String#endsWith|13,585,069|6792535|
|(long string) (true) String#slice and strict comparison|11,699,620|5849811|
|(short string) (false) String#endsWith|14,892,924|7446463|
|(short string) (false) String#slice and strict comparison|12,349,434|6174718|
|(long string) (false) String#endsWith|14,496,524|7248263|
|(long string) (false) String#slice and strict comparison|12,001,264|6000633|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:47:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14576020.30925425,"samples":7288011},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12297375.65573045,"samples":6148688},{"name":"(long string) (true) String#endsWith","opsSec":13585069.157892276,"samples":6792535},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11699620.548987096,"samples":5849811},{"name":"(short string) (false) String#endsWith","opsSec":14892924.391525261,"samples":7446463},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12349434.1723462,"samples":6174718},{"name":"(long string) (false) String#endsWith","opsSec":14496524.637143116,"samples":7248263},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12001264.487910893,"samples":6000633}]}-->
