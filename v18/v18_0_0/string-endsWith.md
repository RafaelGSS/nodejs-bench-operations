## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|79,369,409|97|
|(short string) (true) String#slice and strict comparison|821,430,892|94|
|(long string) (true) String#endsWith|72,572,974|99|
|(long string) (true) String#slice and strict comparison|819,311,855|99|
|(short string) (false) String#endsWith|93,872,071|95|
|(short string) (false) String#slice and strict comparison|821,157,937|94|
|(long string) (false) String#endsWith|84,480,276|97|
|(long string) (false) String#slice and strict comparison|818,895,763|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":79369408.84356463,"samples":4},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821430891.9238197,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":72572973.70025547,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":819311855.262076,"samples":10},{"name":"(short string) (false) String#endsWith","opsSec":93872071.11734593,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":821157936.6016184,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":84480276.06011915,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":818895762.6143254,"samples":7}]}-->
