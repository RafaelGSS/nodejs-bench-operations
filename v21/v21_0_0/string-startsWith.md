## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,714,467|7857234|
|(short string) (true) String#slice and strict comparison|16,572,255|8286128|
|(long string) (true) String#startsWith|14,270,536|7135269|
|(long string) (true) String#slice and strict comparison|16,259,171|8129586|
|(short string) (false) String#startsWith|15,856,209|7928106|
|(short string) (false) String#slice and strict comparison|16,448,212|8224107|
|(long string) (false) String#startsWith|16,009,724|8004863|
|(long string) (false) String#slice and strict comparison|16,517,752|8258877|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:31:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15714467.775202734,"samples":7857234},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16572255.130750624,"samples":8286128},{"name":"(long string) (true) String#startsWith","opsSec":14270536.407695046,"samples":7135269},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16259171.170431463,"samples":8129586},{"name":"(short string) (false) String#startsWith","opsSec":15856209.943454217,"samples":7928106},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16448212.258827629,"samples":8224107},{"name":"(long string) (false) String#startsWith","opsSec":16009724.518997882,"samples":8004863},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16517752.275095105,"samples":8258877}]}-->
