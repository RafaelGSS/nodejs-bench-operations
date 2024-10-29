## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|112,727,656|56460601|
|(short string) (true) String#slice and strict comparison|58,887,981|29527708|
|(long string) (true) String#startsWith|63,602,421|31801216|
|(long string) (true) String#slice and strict comparison|53,323,183|26662279|
|(short string) (false) String#startsWith|99,799,163|49899593|
|(short string) (false) String#slice and strict comparison|59,888,599|29944551|
|(long string) (false) String#startsWith|88,949,133|44608758|
|(long string) (false) String#slice and strict comparison|53,801,534|26900778|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:00:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":112727656.27964848,"samples":56460601},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58887981.45120327,"samples":29527708},{"name":"(long string) (true) String#startsWith","opsSec":63602421.44199804,"samples":31801216},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53323183.86155189,"samples":26662279},{"name":"(short string) (false) String#startsWith","opsSec":99799163.64498733,"samples":49899593},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59888599.29509752,"samples":29944551},{"name":"(long string) (false) String#startsWith","opsSec":88949133.87003411,"samples":44608758},{"name":"(long string) (false) String#slice and strict comparison","opsSec":53801534.69459227,"samples":26900778}]}-->
