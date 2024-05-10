## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,439,378|7219690|
|(short string) (true) String#slice and strict comparison|16,876,777|8438389|
|(long string) (true) String#endsWith|13,974,666|6987334|
|(long string) (true) String#slice and strict comparison|16,927,430|8463716|
|(short string) (false) String#endsWith|14,591,479|7295740|
|(short string) (false) String#slice and strict comparison|17,091,538|8545770|
|(long string) (false) String#endsWith|14,403,872|7201937|
|(long string) (false) String#slice and strict comparison|16,691,320|8345661|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:06:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14439378.63672401,"samples":7219690},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16876777.718338385,"samples":8438389},{"name":"(long string) (true) String#endsWith","opsSec":13974666.72058105,"samples":6987334},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16927430.966831606,"samples":8463716},{"name":"(short string) (false) String#endsWith","opsSec":14591479.255519733,"samples":7295740},{"name":"(short string) (false) String#slice and strict comparison","opsSec":17091538.54117136,"samples":8545770},{"name":"(long string) (false) String#endsWith","opsSec":14403872.8529936,"samples":7201937},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16691320.471863972,"samples":8345661}]}-->
