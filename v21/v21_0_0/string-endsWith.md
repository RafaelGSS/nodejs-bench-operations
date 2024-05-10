## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,422,273|7711137|
|(short string) (true) String#slice and strict comparison|16,259,078|8129540|
|(long string) (true) String#endsWith|13,827,360|6913681|
|(long string) (true) String#slice and strict comparison|16,125,829|8062915|
|(short string) (false) String#endsWith|15,752,731|7876366|
|(short string) (false) String#slice and strict comparison|16,250,547|8125274|
|(long string) (false) String#endsWith|15,799,782|7899892|
|(long string) (false) String#slice and strict comparison|16,297,757|8148879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:12:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15422273.455810435,"samples":7711137},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16259078.968859911,"samples":8129540},{"name":"(long string) (true) String#endsWith","opsSec":13827360.951649478,"samples":6913681},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16125829.715492392,"samples":8062915},{"name":"(short string) (false) String#endsWith","opsSec":15752731.053552572,"samples":7876366},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16250547.310351035,"samples":8125274},{"name":"(long string) (false) String#endsWith","opsSec":15799782.681563392,"samples":7899892},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16297757.90674348,"samples":8148879}]}-->
