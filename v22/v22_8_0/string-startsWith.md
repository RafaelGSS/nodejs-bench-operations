## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|118,001,490|59000802|
|(short string) (true) String#slice and strict comparison|57,154,668|28580332|
|(long string) (true) String#startsWith|65,709,531|32855745|
|(long string) (true) String#slice and strict comparison|51,610,613|25805738|
|(short string) (false) String#startsWith|88,135,873|44078196|
|(short string) (false) String#slice and strict comparison|56,661,716|28330870|
|(long string) (false) String#startsWith|85,900,551|42950290|
|(long string) (false) String#slice and strict comparison|50,816,970|25408516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:05:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":118001490.71856892,"samples":59000802},{"name":"(short string) (true) String#slice and strict comparison","opsSec":57154668.3609796,"samples":28580332},{"name":"(long string) (true) String#startsWith","opsSec":65709531.19887496,"samples":32855745},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51610613.07054946,"samples":25805738},{"name":"(short string) (false) String#startsWith","opsSec":88135873.26361725,"samples":44078196},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56661716.76869613,"samples":28330870},{"name":"(long string) (false) String#startsWith","opsSec":85900551.13741481,"samples":42950290},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50816970.51146568,"samples":25408516}]}-->
