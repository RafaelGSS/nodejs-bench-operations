## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|16,002,611|8001306|
|(short string) (true) String#slice and strict comparison|19,907,820|9953911|
|(long string) (true) String#endsWith|15,658,221|7829111|
|(long string) (true) String#slice and strict comparison|19,949,514|9974758|
|(short string) (false) String#endsWith|16,156,558|8078280|
|(short string) (false) String#slice and strict comparison|19,976,517|9988259|
|(long string) (false) String#endsWith|16,094,311|8047156|
|(long string) (false) String#slice and strict comparison|19,963,024|9981513|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:34:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":16002611.071843121,"samples":8001306},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19907820.725896146,"samples":9953911},{"name":"(long string) (true) String#endsWith","opsSec":15658221.217125073,"samples":7829111},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19949514.44394475,"samples":9974758},{"name":"(short string) (false) String#endsWith","opsSec":16156558.77206879,"samples":8078280},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19976517.36094992,"samples":9988259},{"name":"(long string) (false) String#endsWith","opsSec":16094311.420565248,"samples":8047156},{"name":"(long string) (false) String#slice and strict comparison","opsSec":19963024.562696896,"samples":9981513}]}-->
