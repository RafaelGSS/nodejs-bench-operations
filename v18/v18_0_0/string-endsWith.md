## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|88,641,504|97|
|(short string) (true) String#slice and strict comparison|907,457,740|95|
|(long string) (true) String#endsWith|80,617,996|97|
|(long string) (true) String#slice and strict comparison|904,739,121|99|
|(short string) (false) String#endsWith|104,957,231|95|
|(short string) (false) String#slice and strict comparison|907,838,667|94|
|(long string) (false) String#endsWith|93,531,559|98|
|(long string) (false) String#slice and strict comparison|905,079,975|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:20:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":88641503.93094872,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":907457739.7512256,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":80617995.92414333,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":904739120.9705184,"samples":6},{"name":"(short string) (false) String#endsWith","opsSec":104957231.15051243,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":907838667.1363549,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":93531559.31985292,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":905079975.4923636,"samples":7}]}-->
