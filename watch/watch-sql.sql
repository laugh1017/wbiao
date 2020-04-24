/*
 Navicat Premium Data Transfer

 Source Server         : dmeo
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : watch

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 24/04/2020 12:26:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tit` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('1', 'images/message1.jpg', '【资讯】', '百达翡丽开放网购，不能再像以前一样买表了！', '时间：2020-04-15 14:37:50', '时代要变了。');
INSERT INTO `message` VALUES ('2', 'images/message2.png', '【资讯】', '劳力士、百达翡丽带头翻脸，巴塞尔展命不久矣？', '时间：2020-04-15 10:50:43', '天下无不散之筵席。');
INSERT INTO `message` VALUES ('3', 'images/message3.jpg', '【资讯】', '劳力士：“要钱，还是要命？”', '时间：2020-04-09 11:13:23', '今 日 爆 炸 新 闻 行业资讯、品牌动态、观点分析▼如果把巴塞尔展比作一个人，他现在的内心OS肯定是：“老铁，我太难了。”巴塞尔展是世界最大的钟表展会之一，每年一度，参与的品牌包括百达翡丽、劳力士等。但由于疫情影响，今年的巴展被...');
INSERT INTO `message` VALUES ('4', 'images/message4.jpg', '【资讯】', '淡黄的长裙，蓬松的头发，手表搞起黄色有多可怕', '时间：2020-04-07 11:57:52', '来做裙下之臣吧！');
INSERT INTO `message` VALUES ('5', 'images/message5.jpg', '【资讯】', '百达翡丽今年疑不再上新，热门表款会更好买吗？', '时间：2020-04-07 11:57:52', '欢迎讨论。');
INSERT INTO `message` VALUES ('6', 'images/message6.jpg', '【资讯】', '你的表，就算付我2万块，我也不修！', '时间：2020-04-01 10:02:50', '揭露手表行业惊人内幕！');
INSERT INTO `message` VALUES ('7', 'images/message7.jpg', '【资讯】', '疫情对手表有什么影响？', '时间：2020-03-31 10:46:26', '我们该怎么办？');
INSERT INTO `message` VALUES ('8', 'images/message8.jpg', '【资讯】', 'BVLGARI宝格丽Divas’Dream系列腕表 雀跃旋律，唤醒欢愉春日', '时间：2020-03-24 17:12:15', '伴随清新与自然的气息，万物复苏、阳光明媚的春天已悄悄来临。BVLGARI宝格丽Divas&39;Dream系列腕表，携惊艳材质与瑰丽色彩，为朝气蓬勃的春天增添一抹亮色。精致的扇形图案，是卡拉卡拉浴场马赛克图案的经典重现。倾注罗马的...');
INSERT INTO `message` VALUES ('9', 'images/message9.jpg', '【资讯】', '海瑞温斯顿（Harry Winston）于春分之日邀您一起平分春色', '时间：2020-03-24 16:16:03', '共同探索祖母绿作品的神秘花园，用翠绿光华漾起无穷的生命力。');
INSERT INTO `message` VALUES ('10', 'images/message10.jpg', '【精品导购】', '【GUCCI腕表首饰】奏响春日颂歌，Gucci荣添新作', '时间：2020-03-24 15:11:53', 'Gucci腕表首饰奏响春日颂歌，以崭新面貌惊喜亮相，风格多样，摇曳多姿，全方位绽放美学独特新风采');
INSERT INTO `message` VALUES ('11', 'images/message11.png', '【资讯】', '砥砺前行 传享自由精神 Boucheron 宝诗龙拓展中国零售版图', '时间：2020-03-24 15:06:28', '2020 年，Boucheron 宝诗龙与大家携手并肩，静待春暖花开，并进一步地为中国顾客提供独特的法式珠 宝体验，传递无忧快乐的自由精神，一同迎接蓬勃的新姿态。独具品味的法国高级珠宝世家 Boucheron 宝诗龙位于上海恒隆广...');
INSERT INTO `message` VALUES ('12', 'images/message12.jpg', '【资讯】', '受疫情影响，百达翡丽和宇舶也“关厂”了！', '时间：2020-03-18 15:43:52', '重磅消息！');
INSERT INTO `message` VALUES ('13', 'images/message13.jpg', '【生活方式】', '受疫情影响，劳力士瑞士工厂宣布暂时关闭！', '时间：2020-03-24 17:12:15', '下一个关闭的名表厂会是？');
INSERT INTO `message` VALUES ('14', 'images/message14.jpg', '【资讯】', '雅克德罗（JAQUET DROZ）为爱之蝴蝶（LOVING BUTTERFLY）腕表赋予隽永意蕴', '时间：2020-04-01 10:02:50', '雅克德罗推出自动玩偶腕表新作——爱之蝴蝶自动玩偶腕表“钦奇拉红”系列腕表。');
INSERT INTO `message` VALUES ('15', 'images/message15.jpg', '【资讯】', '雅克德罗（JAQUET DROZ）为爱之蝴蝶（LOVING BUTTERFLY）腕表赋予隽永意蕴', '时间：2020-03-24 17:12:15', '天使悠然掠过……美轮美奂的景象令收藏家目眩神迷 雅克德罗是少数善于制作自动玩偶的钟表品牌之一 如今，雅克德罗推出自动玩偶腕表新作——爱之蝴蝶自动玩偶腕表“钦奇拉红”系列腕表 此动态艺术杰作的灵感来自亨利路易•雅克德罗（Henri-...');
INSERT INTO `message` VALUES ('16', 'images/message16.png', '【资讯】', '藏不住的尊贵，致胜人生——Blancpain宝珀Villeret经典系列', '时间：2020-03-24 15:06:28', '这一枚戴上就能够不再摘下的传世腕表，是你对时间做出的选择，也是时间给你的答案。');
INSERT INTO `message` VALUES ('17', 'images/message17.jpg', '【资讯】', '万表世界人物专访|周新勇：文能著书，武能拆装，钟表鉴定师的十八般武艺', '时间：2020-03-24 15:06:28', '一位资深鉴定师的故事。');
INSERT INTO `message` VALUES ('18', 'images/message18.jpg', '【资讯】', '一期一会樱花季 西铁城限定款樱花表初春上市', '时间：2020-03-24 17:12:15', '樱花季，樱花表');
INSERT INTO `message` VALUES ('19', 'images/message19.png', '【资讯】', '手表自产机芯更好吗？', '时间：2020-03-24 17:12:15', '相信在工作之后，大家手中至少是会有几款比较上档次的手表，毕竟很多场合没有佩戴手表还是不行的。而在挑选手表的时候，机芯品质的问题也被大家非常的看重，自产机芯的手表品牌平主要集中在德系和瑞士手表中，如果我');
INSERT INTO `message` VALUES ('20', 'images/message20.png', '【资讯】', '潜水表哪款有个性？', '时间：2020-03-24 15:06:28', '可能一提到潜水表大家都会想到绿水鬼黑水鬼，但是一线品牌价格略高，可能也不是大家的首选。而迪沃斯提出肆意搭配，年轻就要不一样，这样的一个品牌提供的潜水手表系列性价比就要更高。肆意搭配，年轻就要不一样，真');
INSERT INTO `message` VALUES ('21', 'images/message21.png', '【资讯】', '男人手表哪款更百搭？', '时间：2020-03-31 10:46:26', '经典百搭的手表还是大家都比较喜欢的，手表也是男性身上不可或缺的，很多场合佩戴手表也是一种礼仪。所以男性朋友至少是需要有几块适合的经典百搭手表，只有如此才能够真正保证更好的搭配效果，在一些重要场合中也不');
INSERT INTO `message` VALUES ('22', 'images/message22.png', '【资讯】', '男人戴手表怎样有气质', '时间：2020-03-24 16:16:03', '在消费者的眼前，其实本身就有着各种不一样的手表选择，为了选择一款让自己满意的手表，消费者也真的是花尽了很多的心思，但是始终也不知道到底什么样的手表才能够真正的符合自己，对于一些成熟的男性来说，早就已经');
INSERT INTO `message` VALUES ('23', 'images/message23.png', '【资讯】', '时尚手表多少钱？', '时间：2020-03-24 17:12:15', '如今放在消费者眼前的手表种类有很多，当我们平时想要购买一款手表时，可能会觉得比较疑惑，如果想要一款时尚的日常手表，到底应该怎么去挑选呢？其实在挑选的时候也需要从多个方面来看，或许有一些人仅仅只看外观，');
INSERT INTO `message` VALUES ('24', 'images/message24.png', '【资讯】', '戴手表场合：潜水、差旅、休闲', '时间：2020-03-24 17:12:', '手表确实有着各种不一样的种类，有些手表偏向于休闲，有一些手表偏向于商务风格，但是如果一款手表能够具备多功能的特色，自然也会引来所有消费者的认可。如果有一款手表能够有效具备潜水、差旅、休闲皆可的特色，相');

-- ----------------------------
-- Table structure for rnwbz
-- ----------------------------
DROP TABLE IF EXISTS `rnwbz`;
CREATE TABLE `rnwbz`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rnwbz
-- ----------------------------
INSERT INTO `rnwbz` VALUES ('1', 'images/rnwbz/rnwbz1.jpg', '积家推出Reverso翻转系列腕表惊喜之作', '发表于：2016-01-25', '2016年适逢积家Reverso翻转系列腕表诞生85周年，积家隆重宣布与法国著名时尚品牌克里斯提·鲁布托(Christian Louboutin)携手合作，为积家', '积家翻转女表');
INSERT INTO `rnwbz` VALUES ('3', 'images/rnwbz/rnwbz3.jpg', '积家2016SIHH钟表展新品展示', '发表于：2016-01-22', '今年，积家Reverso翻转腕表迎来庆祝它的85周年华诞，正值2016 SIHH日内瓦高级钟表展期间，积家呈献一系列Reverso翻转腕表新作，并将于积', '积家翻转系列');
INSERT INTO `rnwbz` VALUES ('2', 'images/rnwbz/rnwbz2.jpg', '朗格2016 SIHH钟表展新品展示', '发表于：2016-01-22', 'A Lange&S&ouml;hne 朗格于2016 SIHH高级钟表展推出7款新品，其中包括一枚结合三大复杂装置和五项附加功能的Datograph Perpetual', '朗格机械表');
INSERT INTO `rnwbz` VALUES ('4', 'images/rnwbz/rnwbz4.jpg', '万国晚宴庆祝全新飞行员系列腕表发布', '发表于：2016-01-21', '日内瓦，2016年1月20日——瑞士制表名家IWC万国表在日内瓦国际高级钟表展(SIHH)上隆重庆祝全新飞行员系列腕表的推出。来自瑞士的佩佩·林', '日内瓦表展');
INSERT INTO `rnwbz` VALUES ('5', 'images/rnwbz/rnwbz5.jpg', '积家举办Reverso翻转腕表系列85周年庆典', '发表于：2016-01-20', '2016年1月18日(星期一)，全新一届日内瓦国际高级钟表展拉开帷幕。在这个值得纪念的日子，积家荣耀举办了一场别开生面的品牌盛宴，与800余', '积家reverso系列');
INSERT INTO `rnwbz` VALUES ('6', 'images/rnwbz/rnwbz6.jpg', '万国展示全新飞行员腕表系列展厅', '发表于：2016-01-20', '步入展厅，最引人瞩目的莫过于凌驾于空中的一架军用战机，参观者仿佛回到1936年万国表（IWC）第一款飞行员腕表诞生的峥嵘岁月。展馆内', '日内瓦表展');
INSERT INTO `rnwbz` VALUES ('7', 'images/rnwbz/rnwbz7.jpg', '2016年日内瓦表展新品预览', '发表于：2016-01-18', '第26届日内瓦国际高级钟表沙龙(Salon International de la Haute Horlogerie，以下简称SIHH)将于当地时间2016年1月18日至22日在瑞士', '日内瓦表展');
INSERT INTO `rnwbz` VALUES ('8', 'images/rnwbz/rnwbz8.jpg', '2016 Pre-SIHH：爱彼全新皇家橡树系列万年历腕表黄金款', '发表于：2016-01-13', '2016年，瑞士高级制表品牌爱彼(Audemars Piguet)要让永恒璀璨的黄金光芒再次独占鳌头。作为世界上首款以精钢材质打造的奢华腕表，197', '爱彼手表图片');
INSERT INTO `rnwbz` VALUES ('9', 'images/rnwbz/rnwbz9.jpg', '2016SIHH 新款预览：MB&F全新LM101 platinum 腕表', '发表于：2016-01-12', '对于一款经典的40mm腕表，Legacy Machine 101(LM101)融合了丰富的功能。更准确地说，LM101 是悠久岁月的结晶：从灵感到实现的跨度逾百', '日内瓦表展');
INSERT INTO `rnwbz` VALUES ('10', 'images/rnwbz/rnwbz10.jpg', '2016SIHH新款预览：HYT 全新H2 Tradition复古腕表', '发表于：2016-01-11', '「我们一直强调不走古典，很显然的，我们搞出了一个」。HYT 首席执行官Vincent Perriard最喜欢的事莫过于探索品牌的各种表现形式。', '日内瓦表展');
INSERT INTO `rnwbz` VALUES ('11', 'images/rnwbz/rnwbz11.jpg', '【2016 Pre-SIHH】万国推出全新飞行员系列', '发表于：2016-01-04', '瑞士制表名家沙夫豪森IWC万国表于2016年隆重推出全新飞行员腕表系列，新系列兼顾了腕表爱好者对不同类型腕表的需求：正统的大型飞行员传承', '万国运动表');
INSERT INTO `rnwbz` VALUES ('12', 'images/rnwbz/rnwbz12.jpg', '伯爵创新推出2016年Pre-SIHH展品', '发表于：2015-12-31', '2016年第26届日内瓦国际高级钟表展上，伯爵(PIAGET)隆重推出Emperador Coussin XL 700P概念腕表，限量发行 118 枚。这款腕表开创新猷', '伯爵男表');
INSERT INTO `rnwbz` VALUES ('13', 'images/rnwbz/rnwbz13.jpg', '万宝龙传承精密计时系列推出年历计时码表和日历显示复杂功能腕表', '发表于：2015-12-07', '万宝龙传承精密计时系列全新推出年历计时码表和日历显示复杂功能腕表，演绎传承与创新的完美平衡。万宝龙传承精密计时系列闪耀亮相201', '万宝龙机械表');
INSERT INTO `rnwbz` VALUES ('14', 'images/rnwbz/rnwbz14.jpg', '万宝龙发布时光行者系列外置陀飞轮分钟计时码表', '发表于：2015-12-02', '万宝龙现代都市风格时光行者系列腕表首次搭载万宝龙独家专利外置陀飞轮。这一性能将卓越的时间校准组件与单按钮计时功能结合，融入大胆的', '万宝龙陀飞轮');
INSERT INTO `rnwbz` VALUES ('15', 'images/rnwbz/rnwbz15.jpg', '2015，Astral Skeleton 星际镂空时代七重设问', '发表于：2015-01-27', '星际镂空概念延伸而出，将焦点放置于一群追寻幸运之星的人身上。从1 月12 日到18 日的一周内将在每天展开一段情节，逐步将人们引至今年的SIHH 日内瓦国际高级钟表展。每一段情节都为下一段推开一扇门……所有渐进的通道最终将于1 月19 日开幕当天为陈设在展会现场的Roger Dubuis 罗杰杜彼非凡世界揭开序幕。一个意外惊喜将在那里恭候着访客来临，并邀请人们戴上Oculus 虚拟现实眼镜，踏上一场三维空间的“Astral Skeleton 星际镂空感官之旅”。', NULL);
INSERT INTO `rnwbz` VALUES ('16', 'images/rnwbz/rnwbz16.jpg', '2015，Astral Skeleton星际镂空时代', '发表于：2015-01-26', 'Roger Dubuis罗杰杜彼是全球唯一所有时计皆镌刻日内瓦印记的品牌，象征着制表的极致品质和多样保证：非凡创意、纯正产地、精湛技艺、完美性能和持久耐用。此认证标志所蕴含的一切超卓特质都在Roger Dubuis罗杰杜彼精湛的镂空技艺中获得淋漓尽致的展现。', NULL);
INSERT INTO `rnwbz` VALUES ('17', 'images/rnwbz/rnwbz17.jpg', 'IWC万国表欢庆葡萄牙系列诞生75周年', '发表于：2015-01-22', '2015年1月20日，日内瓦——IWC万国表和来自世界各地的约八百位贵宾齐聚日内瓦国际高级钟表展(SIHH)，隆重庆祝传奇的IWC葡萄牙系列75周年华诞。IWC万国表的一众品牌挚友，包括国际影星艾米莉・布朗特(Emily B高潮。', NULL);
INSERT INTO `rnwbz` VALUES ('18', 'images/rnwbz/rnwbz18.jpg', '全新IWC万国表自制机芯', '发表于：2015-01-22', 'IWC万国表计划进一步拓展其在自制机芯领域的研发和生产能力，并将在未来几年内以三大全新机芯系列实现其自制机芯战略。由品牌自主研发的机芯在技术和美学上树立了钟表业的新标杆，并将进一步巩固IWC万国表在奢华制表领域自主研发和生产机芯的日益领先的地位。', NULL);
INSERT INTO `rnwbz` VALUES ('19', 'images/rnwbz/rnwbz19.jpg', '万表世界看本届SIHH第一天', '发表于：2015-01-20', '第25届SIHH在日内瓦PALEXPO展馆中心今日开幕,用康威凯老师的话评价道:本届日内瓦表展是史上门槛最高的一届，今年的SIHH都有哪些看点?万表世界', NULL);
INSERT INTO `rnwbz` VALUES ('20', 'images/rnwbz/rnwbz20.jpg', 'IWC万国表庆祝表中典范——IWC葡萄牙系列', '发表于：2015-01-20', '2015年是历史悠久的IWC葡萄牙系列诞生75周年。最新IWC葡萄牙系列在技术和外观设计上得以改进，并配备全新功能，于此葡萄牙之年辉煌亮相。与此同时，IWC万国表还进一步深化其自制机芯的研发和生产能力。', NULL);
INSERT INTO `rnwbz` VALUES ('21', 'images/rnwbz/rnwbz21.jpg', '2015 年：积家致敬天文学', '发表于：2015-01-07', '位于瑞士侏罗山区的汝山谷，夜空神秘莫测、扣人心弦，积家大工坊正孕育于此。静谧安详的夜空，没有任何光芒可掩盖其迷人魅力。天空轻柔地怀抱着观天者，倾诉其深藏于夜空的秘密。而时间之源就栖息在这无边的天际里，太阳、月亮以及满天的繁星低声细语，悠长或短暂，与时间分秒相连。自古以来，漫天星宿是人类解开时间奥秘的关键;而制表领域由始至终更是离不开天上的颗颗繁星。', NULL);
INSERT INTO `rnwbz` VALUES ('22', 'images/rnwbz/rnwbz22.jpg', '卡地亚天体运转式陀飞轮镂空腕表', '发表于：2015-01-05', 'Astrotourbillon天体运转式陀飞轮由卡地亚首创于2010年，自问世以来即引发制表业界的竞相研究。结合大气磅礴的表盘，该表款如今已成为卡地亚高级制表系列中最具代表性的复杂功能作品之一。', NULL);
INSERT INTO `rnwbz` VALUES ('23', 'images/rnwbz/rnwbz23.jpg', '第25届日内瓦高档钟表国际沙龙展会信息', '发表于：2015-01-04', '每年1月固定于Palexpo国际展览中心举办的SIHH无疑已经成为世界钟表界的重大节日，第25届SIHH(日内瓦高档钟表国际沙龙)于2015年1月19号开始，持续到1月23日结束。表展延续一贯传统，仅对经销商和媒体代表开放。', NULL);
INSERT INTO `rnwbz` VALUES ('24', 'images/rnwbz/rnwbz24.jpg', 'SIHH 2015——盛宴背后的品牌竞争力比拼', '发表于：2015-01-04', 'SIHH(日内瓦高级钟表沙龙)是比肩巴塞尔高级钟表展的大型钟表盛会，不同于巴展的可能是它的受邀制。今年是SIHH的第25届，该表展已然成为行业内新品的风向标。各个品牌的新作分别从技艺、外观、功能上下功夫，使得表展在一定程度上成为高级腕表品牌较量的战场。', NULL);
INSERT INTO `rnwbz` VALUES ('25', 'images/rnwbz/rnwbz25.jpg', '2015年1月19号日内瓦将迎来第25届SIHH', '发表于：2014-12-31', 'SIHH和巴塞尔钟表展一样，同为钟表行业两大盛会。不过相比巴塞尔，SIHH对于品牌和参展人数限制更多。日内瓦高档钟表国际沙龙于1991年开始举办，发展到2015年已经是第25届，这届钟表展将于1月19号正式拉开序幕，持续到1月23号。', NULL);

SET FOREIGN_KEY_CHECKS = 1;
