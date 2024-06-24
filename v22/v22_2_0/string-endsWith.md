## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,882,066|7941034|
|(short string) (true) String#slice and strict comparison|16,062,696|8031349|
|(long string) (true) String#endsWith|14,365,368|7182685|
|(long string) (true) String#slice and strict comparison|16,187,076|8093539|
|(short string) (false) String#endsWith|16,016,150|8008076|
|(short string) (false) String#slice and strict comparison|16,214,420|8107211|
|(long string) (false) String#endsWith|15,787,049|7893525|
|(long string) (false) String#slice and strict comparison|16,251,650|8125826|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:38:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15882066.951785192,"samples":7941034},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16062696.361646023,"samples":8031349},{"name":"(long string) (true) String#endsWith","opsSec":14365368.96568138,"samples":7182685},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16187076.446098965,"samples":8093539},{"name":"(short string) (false) String#endsWith","opsSec":16016150.142094726,"samples":8008076},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16214420.703068169,"samples":8107211},{"name":"(long string) (false) String#endsWith","opsSec":15787049.999832986,"samples":7893525},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16251650.927385591,"samples":8125826}]}-->
