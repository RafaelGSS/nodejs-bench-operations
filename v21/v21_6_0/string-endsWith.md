## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|276,680,383|96|
|(short string) (true) String#slice and strict comparison|820,732,965|95|
|(long string) (true) String#endsWith|173,952,388|95|
|(long string) (true) String#slice and strict comparison|820,678,920|99|
|(short string) (false) String#endsWith|781,650,164|95|
|(short string) (false) String#slice and strict comparison|820,630,028|97|
|(long string) (false) String#endsWith|782,630,933|98|
|(long string) (false) String#slice and strict comparison|821,502,708|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":276680383.13437885,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":820732964.5839249,"samples":7},{"name":"(long string) (true) String#endsWith","opsSec":173952387.86483228,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":820678919.6384835,"samples":9},{"name":"(short string) (false) String#endsWith","opsSec":781650163.8196328,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":820630028.092711,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":782630932.692842,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":821502708.1675134,"samples":8}]}-->
