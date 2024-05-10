## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|16,388,955|8194478|
|(short string) (true) String#slice and strict comparison|18,616,941|9308471|
|(long string) (true) String#endsWith|15,615,145|7807573|
|(long string) (true) String#slice and strict comparison|20,831,993|10415997|
|(short string) (false) String#endsWith|17,087,418|8543710|
|(short string) (false) String#slice and strict comparison|21,028,177|10514089|
|(long string) (false) String#endsWith|16,829,781|8414891|
|(long string) (false) String#slice and strict comparison|20,829,983|10414992|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:08:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":16388955.58581226,"samples":8194478},{"name":"(short string) (true) String#slice and strict comparison","opsSec":18616941.39634704,"samples":9308471},{"name":"(long string) (true) String#endsWith","opsSec":15615145.828744719,"samples":7807573},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20831993.92053225,"samples":10415997},{"name":"(short string) (false) String#endsWith","opsSec":17087418.24819807,"samples":8543710},{"name":"(short string) (false) String#slice and strict comparison","opsSec":21028177.09756854,"samples":10514089},{"name":"(long string) (false) String#endsWith","opsSec":16829781.349969726,"samples":8414891},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20829983.553037044,"samples":10414992}]}-->
