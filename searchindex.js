Search.setIndex({docnames:["README","configuration","data","index","inference","package/modules","package/opennmt","package/opennmt.config","package/opennmt.constants","package/opennmt.decoders","package/opennmt.decoders.decoder","package/opennmt.decoders.rnn_decoder","package/opennmt.decoders.self_attention_decoder","package/opennmt.encoders","package/opennmt.encoders.conv_encoder","package/opennmt.encoders.encoder","package/opennmt.encoders.mean_encoder","package/opennmt.encoders.rnn_encoder","package/opennmt.encoders.self_attention_encoder","package/opennmt.inputters","package/opennmt.inputters.inputter","package/opennmt.inputters.record_inputter","package/opennmt.inputters.text_inputter","package/opennmt.models","package/opennmt.models.model","package/opennmt.models.sequence_classifier","package/opennmt.models.sequence_tagger","package/opennmt.models.sequence_to_sequence","package/opennmt.models.transformer","package/opennmt.tokenizers","package/opennmt.tokenizers.opennmt_tokenizer","package/opennmt.tokenizers.tokenizer","package/opennmt.utils","package/opennmt.utils.beam_search","package/opennmt.utils.bridge","package/opennmt.utils.cell","package/opennmt.utils.decay","package/opennmt.utils.evaluator","package/opennmt.utils.hooks","package/opennmt.utils.losses","package/opennmt.utils.misc","package/opennmt.utils.position","package/opennmt.utils.reducer","package/opennmt.utils.transformer","package/opennmt.utils.vocab","serving","tokenization","training"],envversion:53,filenames:["README.md","configuration.md","data.md","index.rst","inference.md","package/modules.rst","package/opennmt.rst","package/opennmt.config.rst","package/opennmt.constants.rst","package/opennmt.decoders.rst","package/opennmt.decoders.decoder.rst","package/opennmt.decoders.rnn_decoder.rst","package/opennmt.decoders.self_attention_decoder.rst","package/opennmt.encoders.rst","package/opennmt.encoders.conv_encoder.rst","package/opennmt.encoders.encoder.rst","package/opennmt.encoders.mean_encoder.rst","package/opennmt.encoders.rnn_encoder.rst","package/opennmt.encoders.self_attention_encoder.rst","package/opennmt.inputters.rst","package/opennmt.inputters.inputter.rst","package/opennmt.inputters.record_inputter.rst","package/opennmt.inputters.text_inputter.rst","package/opennmt.models.rst","package/opennmt.models.model.rst","package/opennmt.models.sequence_classifier.rst","package/opennmt.models.sequence_tagger.rst","package/opennmt.models.sequence_to_sequence.rst","package/opennmt.models.transformer.rst","package/opennmt.tokenizers.rst","package/opennmt.tokenizers.opennmt_tokenizer.rst","package/opennmt.tokenizers.tokenizer.rst","package/opennmt.utils.rst","package/opennmt.utils.beam_search.rst","package/opennmt.utils.bridge.rst","package/opennmt.utils.cell.rst","package/opennmt.utils.decay.rst","package/opennmt.utils.evaluator.rst","package/opennmt.utils.hooks.rst","package/opennmt.utils.losses.rst","package/opennmt.utils.misc.rst","package/opennmt.utils.position.rst","package/opennmt.utils.reducer.rst","package/opennmt.utils.transformer.rst","package/opennmt.utils.vocab.rst","serving.md","tokenization.md","training.md"],objects:{"":{opennmt:[6,0,0,"-"]},"opennmt.config":{load_config:[7,1,1,""],load_model_module:[7,1,1,""]},"opennmt.decoders":{decoder:[10,0,0,"-"],rnn_decoder:[11,0,0,"-"],self_attention_decoder:[12,0,0,"-"]},"opennmt.decoders.decoder":{Decoder:[10,2,1,""],get_embedding_fn:[10,1,1,""],get_sampling_probability:[10,1,1,""],logits_to_cum_log_probs:[10,1,1,""]},"opennmt.decoders.decoder.Decoder":{decode:[10,3,1,""],dynamic_decode:[10,3,1,""],dynamic_decode_and_search:[10,3,1,""]},"opennmt.decoders.rnn_decoder":{AttentionalRNNDecoder:[11,2,1,""],MultiAttentionalRNNDecoder:[11,2,1,""],RNNDecoder:[11,2,1,""]},"opennmt.decoders.rnn_decoder.AttentionalRNNDecoder":{__init__:[11,3,1,""]},"opennmt.decoders.rnn_decoder.MultiAttentionalRNNDecoder":{__init__:[11,3,1,""]},"opennmt.decoders.rnn_decoder.RNNDecoder":{__init__:[11,3,1,""],decode:[11,3,1,""],dynamic_decode:[11,3,1,""],dynamic_decode_and_search:[11,3,1,""]},"opennmt.decoders.self_attention_decoder":{SelfAttentionDecoder:[12,2,1,""]},"opennmt.decoders.self_attention_decoder.SelfAttentionDecoder":{__init__:[12,3,1,""],decode:[12,3,1,""],dynamic_decode:[12,3,1,""],dynamic_decode_and_search:[12,3,1,""]},"opennmt.encoders":{conv_encoder:[14,0,0,"-"],encoder:[15,0,0,"-"],mean_encoder:[16,0,0,"-"],rnn_encoder:[17,0,0,"-"],self_attention_encoder:[18,0,0,"-"]},"opennmt.encoders.conv_encoder":{ConvEncoder:[14,2,1,""]},"opennmt.encoders.conv_encoder.ConvEncoder":{__init__:[14,3,1,""],encode:[14,3,1,""]},"opennmt.encoders.encoder":{Encoder:[15,2,1,""],ParallelEncoder:[15,2,1,""],SequentialEncoder:[15,2,1,""]},"opennmt.encoders.encoder.Encoder":{encode:[15,3,1,""]},"opennmt.encoders.encoder.ParallelEncoder":{__init__:[15,3,1,""],encode:[15,3,1,""]},"opennmt.encoders.encoder.SequentialEncoder":{__init__:[15,3,1,""],encode:[15,3,1,""]},"opennmt.encoders.mean_encoder":{MeanEncoder:[16,2,1,""]},"opennmt.encoders.mean_encoder.MeanEncoder":{encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder":{BidirectionalRNNEncoder:[17,2,1,""],GoogleRNNEncoder:[17,2,1,""],PyramidalRNNEncoder:[17,2,1,""],RNNEncoder:[17,2,1,""],UnidirectionalRNNEncoder:[17,2,1,""]},"opennmt.encoders.rnn_encoder.BidirectionalRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.GoogleRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.PyramidalRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.RNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.UnidirectionalRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.self_attention_encoder":{SelfAttentionEncoder:[18,2,1,""]},"opennmt.encoders.self_attention_encoder.SelfAttentionEncoder":{__init__:[18,3,1,""],encode:[18,3,1,""]},"opennmt.inputters":{inputter:[20,0,0,"-"],record_inputter:[21,0,0,"-"],text_inputter:[22,0,0,"-"]},"opennmt.inputters.inputter":{Inputter:[20,2,1,""],MixedInputter:[20,2,1,""],MultiInputter:[20,2,1,""],ParallelInputter:[20,2,1,""]},"opennmt.inputters.inputter.Inputter":{add_process_hooks:[20,3,1,""],get_length:[20,3,1,""],get_serving_input_receiver:[20,3,1,""],initialize:[20,3,1,""],make_dataset:[20,3,1,""],process:[20,3,1,""],remove_data_field:[20,3,1,""],set_data_field:[20,3,1,""],transform:[20,3,1,""],transform_data:[20,3,1,""],visualize:[20,3,1,""]},"opennmt.inputters.inputter.MixedInputter":{__init__:[20,3,1,""],get_length:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""]},"opennmt.inputters.inputter.MultiInputter":{initialize:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""],visualize:[20,3,1,""]},"opennmt.inputters.inputter.ParallelInputter":{__init__:[20,3,1,""],get_length:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""]},"opennmt.inputters.record_inputter":{SequenceRecordInputter:[21,2,1,""]},"opennmt.inputters.record_inputter.SequenceRecordInputter":{__init__:[21,3,1,""],get_length:[21,3,1,""],initialize:[21,3,1,""],make_dataset:[21,3,1,""],transform:[21,3,1,""]},"opennmt.inputters.text_inputter":{CharConvEmbedder:[22,2,1,""],TextInputter:[22,2,1,""],WordEmbedder:[22,2,1,""],load_pretrained_embeddings:[22,1,1,""],tokens_to_chars:[22,1,1,""],visualize_embeddings:[22,1,1,""]},"opennmt.inputters.text_inputter.CharConvEmbedder":{__init__:[22,3,1,""],initialize:[22,3,1,""],transform:[22,3,1,""],visualize:[22,3,1,""]},"opennmt.inputters.text_inputter.TextInputter":{get_length:[22,3,1,""],initialize:[22,3,1,""],make_dataset:[22,3,1,""],transform:[22,3,1,""]},"opennmt.inputters.text_inputter.WordEmbedder":{__init__:[22,3,1,""],initialize:[22,3,1,""],transform:[22,3,1,""],visualize:[22,3,1,""]},"opennmt.models":{model:[24,0,0,"-"],sequence_classifier:[25,0,0,"-"],sequence_tagger:[26,0,0,"-"],sequence_to_sequence:[27,0,0,"-"],transformer:[28,0,0,"-"]},"opennmt.models.model":{Model:[24,2,1,""],get_optimizer_class:[24,1,1,""],learning_rate_decay_fn:[24,1,1,""]},"opennmt.models.model.Model":{__call__:[24,3,1,""],input_fn:[24,3,1,""],print_prediction:[24,3,1,""],serving_input_fn:[24,3,1,""]},"opennmt.models.sequence_classifier":{SequenceClassifier:[25,2,1,""]},"opennmt.models.sequence_classifier.SequenceClassifier":{__init__:[25,3,1,""],print_prediction:[25,3,1,""]},"opennmt.models.sequence_tagger":{SequenceTagger:[26,2,1,""],flag_bioes_tags:[26,1,1,""]},"opennmt.models.sequence_tagger.SequenceTagger":{__init__:[26,3,1,""],print_prediction:[26,3,1,""]},"opennmt.models.sequence_to_sequence":{SequenceToSequence:[27,2,1,""],shift_target_sequence:[27,1,1,""]},"opennmt.models.sequence_to_sequence.SequenceToSequence":{__init__:[27,3,1,""],print_prediction:[27,3,1,""]},"opennmt.models.transformer":{Transformer:[28,2,1,""]},"opennmt.models.transformer.Transformer":{__init__:[28,3,1,""]},"opennmt.tokenizers":{add_command_line_arguments:[29,1,1,""],build_tokenizer:[29,1,1,""],tokenizer:[31,0,0,"-"]},"opennmt.tokenizers.tokenizer":{CharacterTokenizer:[31,2,1,""],SpaceTokenizer:[31,2,1,""],Tokenizer:[31,2,1,""]},"opennmt.tokenizers.tokenizer.Tokenizer":{__init__:[31,3,1,""],detokenize:[31,3,1,""],detokenize_stream:[31,3,1,""],initialize:[31,3,1,""],tokenize:[31,3,1,""],tokenize_stream:[31,3,1,""]},"opennmt.utils":{beam_search:[33,0,0,"-"],bridge:[34,0,0,"-"],cell:[35,0,0,"-"],decay:[36,0,0,"-"],evaluator:[37,0,0,"-"],hooks:[38,0,0,"-"],losses:[39,0,0,"-"],misc:[40,0,0,"-"],position:[41,0,0,"-"],reducer:[42,0,0,"-"],transformer:[43,0,0,"-"],vocab:[44,0,0,"-"]},"opennmt.utils.beam_search":{beam_search:[33,1,1,""],compute_batch_indices:[33,1,1,""],compute_topk_scores_and_seq:[33,1,1,""]},"opennmt.utils.bridge":{Bridge:[34,2,1,""],CopyBridge:[34,2,1,""],DenseBridge:[34,2,1,""],ZeroBridge:[34,2,1,""],assert_state_is_compatible:[34,1,1,""]},"opennmt.utils.bridge.Bridge":{__call__:[34,3,1,""]},"opennmt.utils.bridge.DenseBridge":{__init__:[34,3,1,""]},"opennmt.utils.cell":{build_cell:[35,1,1,""]},"opennmt.utils.decay":{noam_decay:[36,1,1,""]},"opennmt.utils.evaluator":{BLEUDetokEvaluator:[37,2,1,""],BLEUEvaluator:[37,2,1,""],ExternalEvaluator:[37,2,1,""],external_evaluation_fn:[37,1,1,""]},"opennmt.utils.evaluator.BLEUDetokEvaluator":{name:[37,3,1,""]},"opennmt.utils.evaluator.BLEUEvaluator":{name:[37,3,1,""],score:[37,3,1,""]},"opennmt.utils.evaluator.ExternalEvaluator":{__call__:[37,3,1,""],name:[37,4,1,""],score:[37,3,1,""]},"opennmt.utils.hooks":{CountersHook:[38,2,1,""],LogParametersCountHook:[38,2,1,""],SaveEvaluationPredictionHook:[38,2,1,""]},"opennmt.utils.hooks.CountersHook":{after_run:[38,3,1,""],before_run:[38,3,1,""],begin:[38,3,1,""]},"opennmt.utils.hooks.LogParametersCountHook":{begin:[38,3,1,""]},"opennmt.utils.hooks.SaveEvaluationPredictionHook":{__init__:[38,3,1,""],after_run:[38,3,1,""],before_run:[38,3,1,""],begin:[38,3,1,""],end:[38,3,1,""]},"opennmt.utils.losses":{cross_entropy_loss:[39,1,1,""],cross_entropy_sequence_loss:[39,1,1,""]},"opennmt.utils.misc":{add_dict_to_collection:[40,1,1,""],count_lines:[40,1,1,""],count_parameters:[40,1,1,""],extract_batches:[40,1,1,""],extract_prefixed_keys:[40,1,1,""],get_dict_from_collection:[40,1,1,""],item_or_tuple:[40,1,1,""],print_bytes:[40,1,1,""]},"opennmt.utils.position":{PositionEmbedder:[41,2,1,""],PositionEncoder:[41,2,1,""],make_positions:[41,1,1,""]},"opennmt.utils.position.PositionEmbedder":{__init__:[41,3,1,""],encode:[41,3,1,""]},"opennmt.utils.position.PositionEncoder":{__call__:[41,3,1,""],apply:[41,3,1,""],apply_one:[41,3,1,""],encode:[41,3,1,""],encode_sequence:[41,3,1,""]},"opennmt.utils.reducer":{ConcatReducer:[42,2,1,""],JoinReducer:[42,2,1,""],MultiplyReducer:[42,2,1,""],Reducer:[42,2,1,""],SumReducer:[42,2,1,""],pad_in_time:[42,1,1,""],pad_n_with_identity:[42,1,1,""],pad_with_identity:[42,1,1,""],roll_sequence:[42,1,1,""]},"opennmt.utils.reducer.ConcatReducer":{reduce:[42,3,1,""],reduce_sequence:[42,3,1,""]},"opennmt.utils.reducer.JoinReducer":{reduce:[42,3,1,""],reduce_sequence:[42,3,1,""]},"opennmt.utils.reducer.MultiplyReducer":{reduce:[42,3,1,""],reduce_sequence:[42,3,1,""]},"opennmt.utils.reducer.Reducer":{reduce:[42,3,1,""],reduce_sequence:[42,3,1,""],zip_and_reduce:[42,3,1,""]},"opennmt.utils.reducer.SumReducer":{reduce:[42,3,1,""],reduce_sequence:[42,3,1,""]},"opennmt.utils.transformer":{build_future_mask:[43,1,1,""],build_sequence_mask:[43,1,1,""],combine_heads:[43,1,1,""],drop_and_add:[43,1,1,""],feed_forward:[43,1,1,""],multi_head_attention:[43,1,1,""],norm:[43,1,1,""],scaled_dot_attention:[43,1,1,""],split_heads:[43,1,1,""],tile_sequence_length:[43,1,1,""]},"opennmt.utils.vocab":{Vocab:[44,2,1,""]},"opennmt.utils.vocab.Vocab":{__init__:[44,3,1,""],add:[44,3,1,""],add_from_text:[44,3,1,""],lookup:[44,3,1,""],prune:[44,3,1,""],serialize:[44,3,1,""],size:[44,4,1,""]},opennmt:{config:[7,0,0,"-"],constants:[8,0,0,"-"],decoders:[9,0,0,"-"],encoders:[13,0,0,"-"],inputters:[19,0,0,"-"],models:[23,0,0,"-"],tokenizers:[29,0,0,"-"],utils:[32,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"abstract":22,"byte":40,"case":[11,22,25],"class":[10,11,12,14,15,16,17,18,20,21,22,24,25,26,27,28,31,34,35,37,38,41,42,44],"default":[1,33,34,44],"export":[20,24,45,46],"final":[11,33],"function":[7,10,20,22,24,26,33,34,35,36,37,40,42,43,45],"int":33,"new":[4,29,33,44],"null":2,"return":[7,10,11,15,17,20,22,24,26,27,29,31,33,34,35,36,37,39,40,41,42,43,44,46],"static":[21,42],"true":[11,17,20,22,24,26,35,37,39,42],"void":2,"while":33,EOS:33,For:[1,2,4,20,26,47],Ids:33,THE:22,The:[1,2,4,7,10,11,12,14,15,17,18,20,21,22,24,25,26,27,28,31,33,34,35,36,37,38,39,40,41,42,43,44,46,47],Then:[4,47],These:33,Yes:2,__call__:[24,34,37,41],__init__:[11,12,14,15,17,18,20,21,22,25,26,27,28,31,34,38,41,44],_io:31,_topk_:33,_topk_flag:33,_topk_scor:33,_topk_seq:33,about:[1,2,22,24,33],abs:[10,12,14,17,18,28,33,36,43],accept:[1,2],accordingli:[2,36],activ:[12,18,20,22,28,34,47],actual:1,adam_with_decai:1,add:[1,11,20,26,29,33,35,40,43,44],add_command_line_argu:29,add_dict_to_collect:40,add_from_text:44,add_process_hook:20,add_to_collect:31,added:[0,11,17,20,27,35],addit:[20,22,24,26,31],addition:[11,27],advanc:[2,3,46],aerob:2,after:[11,17,20,24,26,33,35],after_run:38,against:[22,37],aggress:46,align:[2,22,26],aliv:33,all:[2,11,15,20,40,42,45],allow:1,alpha:33,also:[2,20,39,47],altern:11,ani:[22,31],antich:2,api:45,apidoc:0,apo:2,appli:[12,14,18,20,22,24,28,34,41,43],apply_on:41,apt:46,arbitrarili:1,architectur:1,arg:29,argument:[11,17,24,29,35,36,38],ark:2,ark_to_record:2,arrai:[22,26,40],arxiv:[10,12,14,17,18,28,33,36,43],assert:34,assert_state_is_compat:34,asset:[31,45],asset_filepath:31,assign:[20,22],associ:[22,44],assum:[20,22,41],assumpt:33,asynchron:47,attach:22,attend:[11,43],attent:[1,11,12,18,28,35,43],attention_dropout:[12,18,28],attention_lay:[11,35],attention_mechan:35,attention_mechanism_class:11,attention_wrapp:11,attentionalrnndecod:11,attentionmechan:[11,35],automat:[0,45],avail:[1,45],averag:[25,39],average_checkpoint:4,average_in_tim:39,avg:4,axi:42,base:[10,11,12,14,15,16,17,18,20,21,22,24,25,26,27,28,29,31,33,34,37,38,41,42,44],baselin:4,basic:11,batch:[24,31,33,40,42],batch_po:33,batch_siz:[24,33,42,43],batch_typ:24,beam:[10,33],beam_search:[6,32],beam_siz:33,beam_width:[10,11,12],beat:2,becaus:[33,45],been:[2,26],befor:11,before_run:38,begin:38,behavior:[22,46],being:33,beyond:2,bidirect:17,bidirectionalrnnencod:17,bin:[1,2,4,46,47],bind:46,bioe:26,bleu:[37,46],bleudetokevalu:37,bleuevalu:37,bool:33,boost:46,both:[17,27],bpe:31,bridg:[6,11,32],broadcast:43,bucket:24,bucket_width:24,budget:2,buffer:24,build:[35,41,43,46],build_cel:35,build_future_mask:43,build_sequence_mask:43,build_token:29,build_vocab:46,bureaucraci:2,cach:43,calcul:43,call:[20,37,40,46],callabl:[10,11,17,20,24,34,35,37,38,44],came:2,can:[1,2,4,11,20,24,29,33,45,46],candid:24,capac:2,captur:33,case_insensitive_embed:22,categor:10,cell:[6,11,17,32],cell_class:[11,17,35],chang:36,charact:[1,22,31],charactertoken:31,charconvembedd:22,checkpoint:47,checkpoint_path:4,chief:47,chief_host:47,chunk:26,ckpt:4,classifi:25,classnam:24,client:33,cloth:2,cmake:46,code:[0,1],collabor:2,collect:[20,31,40],collection_nam:40,combin:42,combine_head:43,command:[1,29,47],common:[2,17],compat:34,compil:46,complet:33,complex:1,comput:[26,33,39,43,47],compute_batch_indic:33,compute_topk_scores_and_seq:33,concaten:[42,43],concatreduc:[15,17,20,42],config:[1,4,5,6,24,46],config_path:7,configur:[2,3,4,7,10,21,22,25,26,31,46],configuration_file_or_kei:[31,46],consid:[1,46],consist:46,constant:[5,6,10,36],constrain:24,construct:11,constructor:17,contain:[1,20,21,22,24,25,26,27,31,33,42,43,45],content:2,context:43,contrib:[11,24,35],contribut:1,control:4,conv_encod:[6,13],convencod:14,conveni:35,converg:10,convert:2,convolut:[1,14,22],coodin:33,coordin:33,copi:38,copybridg:34,correctli:26,correspond:15,could:26,count_lin:40,count_paramet:40,counter:38,countershook:38,cpp:45,creat:[2,20,24,33,41,44],crf:26,crf_decod:26,cross:39,cross_entropy_loss:39,cross_entropy_sequence_loss:39,cuda_visible_devic:47,cumul:10,current:[0,20,26,27,28,33,36,38,47],custom:[2,38,46],data:[1,3,19,20,21,22,25,26,27,28,45,46,47],data_fil:[20,21,22],dataset:20,decai:[6,24,32],decay_r:[24,36],decay_step:[24,36],decay_step_dur:24,decay_typ:24,decayed_learning_r:24,decod:[5,6,27,33,34,40,41,47],decode_length:33,decoded_id:33,decoder_zero_st:34,defin:[1,2,7,8,9,11,12,13,14,16,17,18,19,20,21,22,23,28,29,31,32,34,36,39,41,42,43],definit:45,delimit:31,deliv:2,densebridg:34,depend:[20,40,41],depth:[2,21,41,42,43],describ:[1,2,10,12,14,17,18,24,28,36,43],design:1,detail:[22,24,47],detok:[37,46],detoken:[31,46],detokenize_stream:31,dev:46,dict:[27,33,40],dict_:40,dictionari:[7,20,24,27,31,40,43],differ:33,dimens:[17,22,28,36,39,41,42,43],dir:45,direct:17,directli:10,directori:[4,20,22,37,45,47],disk:[4,44,45],displai:[2,47],divis:17,doc:0,docker:47,document:[3,47],doe:34,done:20,dot:43,down:2,drop:[11,12,14,17,18,20,22,28,35,43],drop_and_add:43,dropout:[11,12,14,17,18,20,22,28,35,43],dtype:43,duplic:[1,2],dure:[4,10,41,45,46,47],dynam:[1,10,27,41],dynamic_decod:[10,11,12],dynamic_decode_and_search:[10,11,12],each:[10,11,15,17,21,22,26,28,31,33,35,39,40,41,42,43,44,47],easi:33,echo:46,economi:2,ecosystem:47,element:[24,40,42],emb:41,embed:[1,10,11,12,19,20,22,47],embedd:22,embedding_fil:22,embedding_file_kei:22,embedding_file_with_head:22,embedding_s:[22,46],embedding_var:22,empti:[7,37],encod:[1,5,6,11,25,26,27,31,34,40,41],encode_sequ:41,encoder_st:34,end:[1,2,10,27,33,38,45],end_token:[10,11,12],enfr:[4,46],ensur:46,entri:[22,44],entropi:39,environ:[45,46],eos_id:33,equal:33,essenti:46,estim:[10,15,20,24,35,39,43,47],etc:[1,26,47],european:2,evalu:[6,10,24,26,32,38,46,47],evaluators_nam:37,everi:[4,15],every_n_sec:38,every_n_step:38,exampl:[1,2,4,20,24,45,46],execut:[4,15],expand:33,expect:[2,21,45],expected_st:34,extent:2,extern:[31,37,45,46],external_evaluation_fn:37,externalevalu:37,extract:25,extract_batch:40,extract_prefixed_kei:40,factor:17,fals:[11,17,20,22,26,35,36,39],fashion:24,feat1:2,featm:2,featur:24,features_fil:[4,24],feder:2,feed:[12,18,28,43],feed_forward:43,fetch:46,ffn_inner_dim:[12,18,28],field:[20,21],file:[0,2,4,7,20,21,22,24,25,26,31,38,40,44,45,46],filenam:[31,38,40,44],fill:[7,44],filter:14,find:46,finish:33,first:[33,41,47],fit:2,flag:[26,33],flag_bioes_tag:26,flatten:21,float32:[21,43],follow:[4,21,22,46],format:[22,24],forward:[12,18,20,28,43],found:[22,44],framework:47,freedom:1,frequenc:44,from:[0,1,2,10,11,12,14,18,19,21,22,24,25,28,33,34,38,40,43,44],full:[10,33],fund:2,futur:43,gather:[20,33],gcc:46,gener:[2,15,20,22,33,40,46],get:[40,46],get_dict_from_collect:40,get_embedding_fn:10,get_length:[20,21,22],get_optimizer_class:24,get_sampling_prob:10,get_serving_input_receiv:20,git:46,given:[20,27,33,46],global_step:[10,24,36],glove:22,gnmt:17,goal:2,gold:26,gold_flag:26,googl:[28,43],googlernnencod:17,gpu:47,gradient:47,graph:[20,22,29,40,45,46,47],graphkei:31,greater:[31,41],greedi:10,group:2,grow:33,grow_al:33,grow_finish:33,gym:2,hand:33,has:[1,2,21,26,33],have:[2,20,22,33,35,41],head:[2,12,18,28,43],header:22,hello:46,help:2,helper:[35,42],here:[33,46],hidden:[12,18,28,43],high:1,home:46,hook:[6,20,32,37],host:47,how:4,html:0,http:[10,12,14,17,18,28,33,36,43],ident:42,identifi:[2,26,44],identity_valu:42,ids:[10,27,33],ids_out:27,ignor:[22,26,36],implement:[1,2,19,33,38,43],implemet:33,impos:11,includ:[22,47],incompat:34,incorrectli:26,increas:[4,27,44],index:[2,33,41,44,45],infer:[1,3,10,11,12,45,46],inform:[34,45,47],inherit:[11,24],init:46,initi:[10,11,12,14,15,17,18,20,21,22,25,26,27,28,31,34,38,41,44],initial_id:33,initial_st:[10,11,12],inner:[11,12,17,18,28,35,43],inner_dim:43,input:[1,10,11,12,14,15,16,17,18,19,20,21,22,24,25,26,27,28,31,35,41,42,43,45],input_depth_kei:21,input_fn:24,input_stream:31,inputt:[1,2,5,6,25,26,27,28,46],insensit:[22,25],inspect:45,inspir:33,instanc:[1,17,47],instead:[10,46],instructor:2,int64:21,integ:[11,35],integr:47,interfac:33,introspect:33,invalid:[10,25,37],italian:2,item:33,item_or_tupl:40,iter:[10,22,40],its:[11,15,16,17,35,40,42,44],join:42,joinreduc:[15,42],keep:4,keep_checkpoint_max:4,kei:[1,2,20,21,22,25,26,27,31,40,43],kernel:14,kernel_s:[14,22],kill:2,know:45,known:[10,21],kubernet:47,label:[22,24,25,26,37,39],label_smooth:39,labels_fil:[24,37],labels_vocabulary_file_kei:[25,26],laid:2,last:[11,25],latest:[4,45],layer:[11,12,14,17,18,26,28,35,43],learn:[1,24,36,47],learning_r:[24,36],learning_rate_decay_fn:24,legisl:2,length:[10,15,20,21,22,24,26,27,31,33,35,39,41,42,43],length_penalti:[10,11,12],level:[1,39],libboost:46,like:[22,33,45,47],line:[1,2,19,22,25,26,29,40,44,47],linear:[10,12,18,34,43],list:[7,11,15,20,21,22,24,31,35,37,42,44,47],load:[7,31,44],load_config:7,load_model_modul:7,load_pretrained_embed:22,localhost:47,log:[10,20,22,33,37,38,47],log_dir:[20,22],log_prob:[10,33],logdir:47,logic:[19,34],logit:[10,11,33,39],logits_to_cum_log_prob:10,logparameterscounthook:38,look:45,lookup:[20,41,44],loop:47,loss:[6,32,47],lowercas:22,lstmcell:[11,17,35],luongattent:11,machin:47,made:[1,2],mai:33,main:[1,4,47],maintain:34,make:[0,24,33,46],make_dataset:[20,21,22],make_posit:41,manag:47,mani:[2,4,24],manual:45,mark:33,mask:43,master:2,match:[22,26],max:42,max_count:4,max_length:43,max_sequence_length:42,max_siz:44,max_word_length:22,maximum:[10,24,41,43,44],maximum_features_length:24,maximum_iter:[10,11,12],maximum_labels_length:24,maximum_length:[41,43],maximum_posit:41,mean:[2,16,22],mean_encod:[6,13],meanencod:16,mechan:11,memori:[10,11,12,43],memory_sequence_length:[10,11,12],merg:[15,17,20,41,42],merge_config:1,meta:22,metadata:[20,21,22,24,31],method:[20,33],metric:26,min_frequ:44,minim:16,minimum:44,minimum_learning_r:24,misc:[6,32],miss:26,mix:[1,20],mixedinputt:[1,20],mkdir:46,modal:1,mode:[10,11,12,14,15,16,17,18,20,21,22,24,31,35,39,43],modekei:[10,15,20,24,35,39,43],model:[2,4,5,6,7,20,31,33,36,38,43,45,46],model_dir:4,model_fn:24,modul:[1,5,6,9,13,19,23,29,32],more:[1,24,37,47],mostli:38,multi:[1,11,12,15,18,20,35,37,43,46],multi_head_attent:43,multiattentionalrnndecod:11,multiinputt:20,multipl:[11,15,20],multipli:42,multiplyreduc:42,must:[10,22,33,34,42],my_config:[1,4],name:[2,24,25,26,27,28,31,33,36,37,40],nation:2,need:[33,45],neg:26,neither:22,nest:[10,20,33,42],newli:46,newlin:2,newstest2014:4,next:[11,24,33],noam_decai:36,node:45,non:7,none:[7,10,11,12,14,15,16,17,18,20,22,24,25,26,27,31,33,34,35,36,37,38,40,41,43,44],nor:22,norm:[43,47],normal:43,note:45,now:46,num_head:[12,18,28,43],num_lay:[11,12,14,17,18,28,35],num_oov_bucket:22,num_output:22,num_parallel_process_cal:24,num_unit:[11,12,14,17,18,28,35,43],number:[10,11,12,14,17,18,22,24,28,33,35,38,40,43,44],numpi:[22,26,40],object:[10,12,14,15,17,18,20,22,24,28,31,34,37,41,42,44],observ:33,occur:37,off:33,offset:42,onc:20,one:[11,20,22,25,26,37,41],onli:[0,11,26,27,28,46],onmt:46,open:47,opennmt:[0,1,2,3,45,46,47],opennmt_token:[6,29],opennmttoken:46,oper:33,ops:[11,17,33,35],opt:24,optim:[1,22,24],option:[1,2,4,10,22,24,38,41,43,46],order:33,org:[10,12,14,17,18,28,33,36,43],other:[1,22,45],otherwis:[15,22,31,41,43],out:4,output:[10,11,12,14,15,17,18,22,24,25,27,28,31,33,35,37,38,40,43,45],output_dir:[4,37,38],output_fil:38,output_is_attent:11,output_stream:31,outputs_reduc:15,over:14,overrid:11,packag:[0,3,5,46],pad:[20,33,41,42],pad_in_tim:42,pad_n_with_ident:42,pad_with_ident:42,padded_batch:20,padded_shap:20,padding_length:42,pair:20,parallel:[20,24],parallelencod:[1,15],parallelinputt:[1,2,20],param:[24,25,26,27],paramet:[4,7,10,11,12,14,15,17,18,20,21,22,24,25,26,27,28,31,33,34,35,36,37,38,39,40,41,42,43,44,47],parameter:34,parliament:2,parser:29,part:[1,46],pass:[11,34],past:24,path:[7,22,37,44],pattern:33,pbtxt:22,penal:33,penalti:[10,33],per:[22,25,26],perform:4,period:45,perl:[37,46],permit:33,person:2,pilat:2,pip:0,plugin:46,portal:3,pos:33,posit:[6,12,14,18,26,28,32,43],position_encod:[12,14,18,28],positionembedd:[12,14,18,28,41],positionencod:[12,14,18,28,41],possibl:[7,10,20,33,42],post_evaluation_fn:38,postur:2,pre:43,precis:26,predefin:1,predict:[24,25,26,27,37,38,46],predicted_flag:26,predicted_id:10,predictions_fil:4,predictions_path:37,prefer:1,prefetch:24,prefetch_buffer_s:24,prefix:[2,27,33,40],prepar:[2,20,27,46],prerog:2,pretrain:22,previou:43,print:[24,40],print_byt:40,print_predict:[24,25,26,27],prioriti:1,probabl:[10,11,12,14,17,18,20,22,28,33,35,39,43,47],process:[20,22,24,25,26,27,28,33],produc:26,product:43,program:2,project:[8,40,43],projector_config:22,provid:[1,3,22,33,45,46],provis:2,prune:44,ps_host:47,purchas:2,purpos:2,py_func:45,pyramidalrnnencod:17,python:[0,1,2,4,7,11,17,31,35,38,44,45,46,47],pythonpath:46,queri:[10,43],quot:2,rais:[10,17,22,24,25,27,31,34,35,37],rank:31,rate:[24,36,47],raw:[19,20],reach:33,read:[10,21,40],read_prob:10,realis:2,recal:26,receiv:20,recommonmark:0,record:[2,21,33],record_inputt:[6,19],reduc:[6,15,17,20,32,39,41],reduce_sequ:42,reduced_input:42,reduced_length:42,reduct:17,reduction_factor:17,refer:[34,46],reflect:27,refus:2,regist:[22,31],rel:[7,22],relat:[1,7,37,43],relu:[12,18,28],relu_dropout:[12,18,28],remov:[0,20],remove_data_field:20,renam:0,replac:11,replic:43,repositori:46,repres:33,requir:[20,31,33,45,46],reserv:41,residu:43,residual_connect:[11,17,35],resolv:24,respect:42,result:[22,37],retain:42,reusabl:1,rightmost:1,rip:2,rnn:[1,11,17,35],rnn_cell_impl:[11,17,35],rnn_decod:[6,9],rnn_encod:[6,13],rnncell:35,rnndecod:11,rnnencod:17,roll_sequ:42,run:[0,4,33,37,45,47],run_context:38,run_valu:38,sai:[2,33],same:[15,20,35,41,42],sampl:[1,10,24,46,47],sample_buffer_s:24,sampling_prob:[10,11,12],save:[4,17,37,38,44,46],save_checkpoints_step:4,save_vocab:46,saved_model:45,saved_model_cli:45,saveevaluationpredictionhook:[37,38],scale:[2,36,43],scaled_dot_attent:43,schedul:10,schedule_typ:10,scheme:26,scor:33,score:[33,37,43],scores_to_gath:33,script:[1,2,4,44,45],seach:33,search:[10,33],see:[1,2,20,46,47],select:[24,29,47],self:[1,12,18,28],self_attention_decod:[6,9],self_attention_encod:[6,13],selfattentiondecod:12,selfattentionencod:18,semant:36,senior:2,sentenc:[2,31,33,44],separ:[1,2],seq2seq:[11,27,35],seq:33,seq_length:33,seqclassifi:25,seqtagg:26,sequenc:[10,14,15,17,19,22,24,25,26,27,28,31,33,39,41,42,43],sequence_classifi:[6,23],sequence_length:[10,11,12,14,15,16,17,18,22,26,31,39,41,42,43],sequence_tagg:[6,23],sequence_to_sequ:[6,23,28],sequenceclassifi:25,sequencerecordinputt:[2,21],sequencetagg:26,sequencetosequ:[27,28,46],sequenti:[15,33],sequentialencod:[1,15],serial:[2,31,44,45],serv:[3,20,24],server:47,serving_default:45,serving_input_fn:24,servinginputreceiv:[20,24],session:38,session_run_hook:38,sessionrunhook:38,set:[1,2,4,10,20,22,24,31,34,40,41,43,46,47],set_data_field:20,setup:20,sever:[4,15,20,47],shape:[10,15,20,21,22,41,42,43],share:28,shell:47,shift:[27,42],shift_target_sequ:27,shortcut:41,shoud:33,should:[1,2,27,31,47],show:45,signatur:[20,24],signature_def:45,simpl:[11,16,17,20,22,38],simpli:[1,47],simplifi:2,singl:[1,40,42],site:2,size:[10,14,22,24,33,34,41,43,44,46],sleep:2,smooth:39,soldier:2,some:[1,45],sourc:[1,2,7,10,11,12,14,15,16,17,18,20,21,22,24,25,26,27,28,29,31,33,34,35,36,37,38,39,40,41,42,43,44,47],source_inputt:[27,28,46],source_tokenizer_config:46,source_words_vocabulari:46,space:[2,22,31],spacetoken:[22,31],special:44,special_token:44,specif:20,speed:47,sphinx:0,sphinx_rtd_them:0,split:[22,31,43],split_head:43,src:[2,45],staircas:[24,36],standard:[27,31],start:[10,22,24,27,33,44,47],start_decay_step:24,start_token:[10,11,12],state:[2,10,11,15,17,33,34],states_reduc:15,states_to_gath:33,stdout:[31,40],step:[4,10,11,24,33,36,37,38],stepcounterhook:38,stop:27,store:33,str_as_byt:40,strageti:24,stream:[24,25,26,27,31,40],stretch:2,stride:22,string:[24,26,29,31,33,40,44],structur:[20,42],submodul:[5,46],subpackag:5,sudo:46,suffix:[27,38],sum:42,summar:38,summari:47,summary_writ:38,sumreduc:[17,41,42],support:[26,27,28,31,45,47],sybmol:33,symbol:33,symbols_to_logits_fn:33,synchron:47,synergi:2,sys:40,tabl:[20,41],table_initi:20,tag:26,tag_set:45,tagger:26,tagging_schem:26,take:[10,11,16,17,33,35,38],target:[2,10,27,28],target_inputt:[27,28,46],target_tokenizer_config:46,target_words_vocabulari:46,task:47,task_index:47,task_typ:47,templat:1,tensor:[10,20,21,22,27,29,31,33,40,41,42,43],tensorboard:[22,47],tensorflow:[11,17,35,38,45,47],term:2,test:[0,46],text:[19,22,31,44,45,46],text_inputt:[6,19,27,28],textinputt:[2,22,46],textiowrapp:31,tfdbg:33,tfrecord:[2,21],tgt:45,than:[31,41],thei:[1,2],them:2,thi:[2,3,4,11,20,22,24,25,26,27,28,33,37,38,40,41,45],thing:33,third_parti:46,thoughout:8,three:33,throughout:40,tile:43,tile_sequence_length:43,time:[17,21,33,39,41,42,43],titl:2,toi:[1,2,45],tok:4,token:[2,3,5,6,10,22,24,27,39,44,45],tokenize_stream:31,tokenize_text:46,tokenizer_config:46,tokens_to_char:22,tokp_gathered_scor:33,told:2,tool:46,top:33,topk:33,topk_finished_flag:33,topk_gathered_scor:33,topk_seq:33,total:40,train:[1,2,3,4,10,11,12,14,15,16,17,18,20,22,24,38,39,45,46],train_and_evalu:47,train_features_fil:2,train_source_1:2,train_source_2:2,train_source_3:2,trainabl:[22,38,40],trainer:2,transform:[6,12,18,19,20,21,22,23,29,32,34],transform_data:20,tupl:[10,15,26,33,39,40,42,43],two:2,txt:[2,45,46],type:[10,24,33,43,45],typeerror:[10,27],typic:45,ubuntu:46,under:46,unicod:[22,31],unidirectionalrnnencod:17,uniqu:33,unit:[11,12,14,17,18,20,22,28,35,43],unknown:22,unless:2,unscal:39,unsur:1,unused_data:20,updat:[20,27,46],url:47,usag:2,use:[0,24,31,33,40,43,45,46],used:[1,2,4,8,10,17,26,31,33,37,41,45,46],user:[1,20,24,31,47],uses:47,using:[1,2,11,12,17,18,33,45,46],usual:[4,10,20,41],utf:31,util:[5,6,11,12,14,15,17,18,20,24,28],val1:22,val2:22,valm:22,valu:[1,8,10,20,21,24,33,39,40,41,42,43,44],valueerror:[10,17,22,24,25,31,34,35,37],variabl:[21,22,45],variant:22,variou:[32,40],vector:[19,22,25,43],version:[31,44],view:40,visual:[20,22,33,47],visualize_embed:22,vocab:[6,32,33,45,46],vocab_s:[10,11,12,33],vocabulari:[10,22,25,26,44,45,46],vocabulary_fil:22,vocabulary_file_kei:[22,46],vocabulary_s:22,volatil:20,warmup:36,watch:33,weight:[10,45],welcom:1,when:[2,10,17,24,26,33,45],where:[2,10,41,42,43,44],whether:33,which:[2,11,20,21,24,33,35,37,38,42],whose:2,width:[10,24],window:22,with_head:22,within:20,word1:22,word2:22,word:[1,10,22,47],wordembedd:[22,27,28,46],wordn:22,work:[1,29],worker:47,worker_host:47,workflow:46,world:46,wrapper:11,write:44,yaml:[1,2,31,46],yml:[1,4,46],you:[1,2,45],your:[2,4,45,46],zerobridg:[11,34],zip:42,zip_and_reduc:42},titles:["Documentation","Configuration","Data","Overview","Inference","opennmt","opennmt package","opennmt.config module","opennmt.constants module","opennmt.decoders package","opennmt.decoders.decoder module","opennmt.decoders.rnn_decoder module","opennmt.decoders.self_attention_decoder module","opennmt.encoders package","opennmt.encoders.conv_encoder module","opennmt.encoders.encoder module","opennmt.encoders.mean_encoder module","opennmt.encoders.rnn_encoder module","opennmt.encoders.self_attention_encoder module","opennmt.inputters package","opennmt.inputters.inputter module","opennmt.inputters.record_inputter module","opennmt.inputters.text_inputter module","opennmt.models package","opennmt.models.model module","opennmt.models.sequence_classifier module","opennmt.models.sequence_tagger module","opennmt.models.sequence_to_sequence module","opennmt.models.transformer module","opennmt.tokenizers package","opennmt.tokenizers.opennmt_tokenizer module","opennmt.tokenizers.tokenizer module","opennmt.utils package","opennmt.utils.beam_search module","opennmt.utils.bridge module","opennmt.utils.cell module","opennmt.utils.decay module","opennmt.utils.evaluator module","opennmt.utils.hooks module","opennmt.utils.losses module","opennmt.utils.misc module","opennmt.utils.position module","opennmt.utils.reducer module","opennmt.utils.transformer module","opennmt.utils.vocab module","Serving","Tokenization","Training"],titleterms:{autodoc:0,averag:4,beam_search:33,bridg:34,build:0,cell:35,checkpoint:4,config:7,configur:1,constant:8,conv_encod:14,data:2,decai:36,decod:[9,10,11,12],depend:0,distribut:47,document:0,encod:[13,14,15,16,17,18],evalu:37,file:1,format:2,hook:38,infer:4,input:2,inputt:[19,20,21,22],instal:[0,46],local:0,loss:39,mean_encod:16,misc:40,model:[1,23,24,25,26,27,28],modul:[7,8,10,11,12,14,15,16,17,18,20,21,22,24,25,26,27,28,30,31,33,34,35,36,37,38,39,40,41,42,43,44],monitor:47,multipl:1,note:46,opennmt:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],opennmt_token:30,overview:3,packag:[6,9,13,19,23,29,32],parallel:2,paramet:1,posit:41,record_inputt:21,reduc:42,regist:0,rnn_decod:11,rnn_encod:17,self_attention_decod:12,self_attention_encod:18,sequence_classifi:25,sequence_tagg:26,sequence_to_sequ:27,serv:45,sourc:0,submodul:[6,9,13,19,23,29,32],subpackag:6,text:2,text_inputt:22,token:[29,30,31,46],train:47,transform:[28,43],usag:46,util:[32,33,34,35,36,37,38,39,40,41,42,43,44],vector:2,vocab:44}})