## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|277,597,520|95|
|(short string) (true) String#slice and String#indexOf|821,663,761|92|
|(short string) (true) String#slice and strict comparison|822,114,431|98|
|(long string) (true) String#startsWith|176,186,884|99|
|(long string) (true) String#slice and strict comparison|822,274,529|96|
|(short string) (false) String#startsWith|784,514,662|97|
|(short string) (false) String#slice and strict comparison|822,464,967|97|
|(long string) (false) String#startsWith|784,452,639|100|
|(long string) (false) String#slice and strict comparison|822,323,248|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":277597519.6910052,"samples":6},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":821663760.5660061,"samples":8},{"name":"(short string) (true) String#slice and strict comparison","opsSec":822114431.3748491,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":176186884.17720592,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":822274529.1222775,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":784514661.5439197,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":822464966.7835683,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":784452639.3347441,"samples":8},{"name":"(long string) (false) String#slice and strict comparison","opsSec":822323248.2132703,"samples":7}]}-->
