## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|79,739,438|98|
|(short string) (true) String#slice and strict comparison|821,281,958|97|
|(long string) (true) String#endsWith|72,370,232|99|
|(long string) (true) String#slice and strict comparison|818,792,770|97|
|(short string) (false) String#endsWith|94,292,980|100|
|(short string) (false) String#slice and strict comparison|821,549,253|97|
|(long string) (false) String#endsWith|84,019,200|98|
|(long string) (false) String#slice and strict comparison|819,202,101|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":79739438.01542498,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821281957.6301477,"samples":10},{"name":"(long string) (true) String#endsWith","opsSec":72370232.07392138,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":818792769.7415771,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":94292980.49270156,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":821549253.4965684,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":84019199.62841463,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":819202101.2365745,"samples":7}]}-->
